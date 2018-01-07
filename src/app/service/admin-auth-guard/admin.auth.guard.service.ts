import { Observable } from 'rxjs/Observable';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.authService.user$
      .switchMap(user => this.userService.get(user.uid))
      .map(appUser => appUser.isAdmin);
  }
}
