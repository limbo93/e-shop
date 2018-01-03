import { AuthService } from './../auth-service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate() {
    return this.authService.user$.map(user => {
      if (user) return true;

      this.router.navigate(['login']);
      return false; 
    })
  }
}
