import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth-service/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(public authService: AuthService) {
    
  }

  logout() {
    this.authService.logout();
  }
}
