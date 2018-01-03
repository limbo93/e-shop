import { Router } from '@angular/router';
import { AuthService } from './service/auth-service/auth.service';
import { Component } from '@angular/core';
import { UserService } from './service/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {
    authService.user$.subscribe(user => {
      if (user) {
        this.userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }


}
