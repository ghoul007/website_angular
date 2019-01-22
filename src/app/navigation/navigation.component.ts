import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLogin: boolean;

  constructor( private auth: AuthenticationService,) { }

  ngOnInit() {
    this.isLogin  = this.auth.isloggedIn()
  }


  logout(){
    this.auth.logout();
  }

}
