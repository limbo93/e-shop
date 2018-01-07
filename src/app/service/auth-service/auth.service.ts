import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AppUser } from '../user/domain/app.user.model';
import { UserService } from '../user/user.service';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private userService: UserService,
    private angularFireAuth: AngularFireAuth,
    private route: ActivatedRoute) {
    this.user$ = angularFireAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => this.userService.get(user.uid))
  }
}
