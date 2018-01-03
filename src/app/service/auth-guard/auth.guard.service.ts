import { AuthService } from './../auth-service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(router, state: RouterStateSnapshot) {
    return this.authService.user$.map(user => {
      if (user) return true;

      this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
      return false;
    })
  }
}
