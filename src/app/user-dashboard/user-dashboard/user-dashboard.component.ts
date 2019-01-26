import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: User;
  isloggedIn: boolean

  constructor(private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.isloggedIn = true;
    }
  }



  logout() {
    this.isloggedIn = false;
    localStorage.removeItem('currentUser')
    this.router.navigate(['/home'])
  }
}
