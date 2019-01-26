import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ConfigService } from '../config.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLogin: boolean;
  menu: any
  database = 'menu'

  constructor(private auth: AuthenticationService, private config: ConfigService) { }

  ngOnInit() {
    this.isLogin = this.auth.isloggedIn()
    this.getMenu(this.database);
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

  logout() {
    this.auth.logout();
  }

}
