import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ConfigService } from '../config.service';
import * as $ from 'jquery'
import { of } from 'rxjs';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,  AfterContentChecked {
  isLogin: boolean;
  menu: any
  database = 'menu'
  profileImage: string;
  user: any;
  constructor(private auth: AuthenticationService, private config: ConfigService) { }

  ngOnInit() {
    this.isLogin = this.auth.isloggedIn()
    this.getMenu(this.database);
    this.getUser();
  }

  getMenu(database) {

    this.config.getSettings(database).subscribe(
      settings => {
        this.menu = settings
        setTimeout(
          () => $("#nav-mobile").html($("#nav-main").html()), 1000
        )

      }
    )
  }
  ngAfterContentChecked() {
    of(this.auth.isloggedIn()).subscribe(
      () => {
        this.getUser();
      }
    );

  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.user) {
      this.profileImage = this.user.image || "user-1.jps"
    }
  }

  logout() {
    this.auth.logout();
  }

}
