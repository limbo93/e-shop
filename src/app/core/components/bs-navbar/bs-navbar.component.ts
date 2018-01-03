import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(private angularFireAuth:AngularFireAuth) { 
    angularFireAuth.authState.subscribe(s=>console.log(s));
  }

  logout(){
    this.angularFireAuth.auth.signOut();
  }
}
