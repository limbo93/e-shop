import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth-service/auth.service';
import { AppUser } from '../../../service/user/domain/app.user.model';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  appUser: AppUser;

  constructor(private authService: AuthService) {
    authService.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    this.authService.logout();
  }
}
