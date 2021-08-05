import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser: string = "";
  constructor(private alertyfy: AlertifyService) { }

  ngOnInit() {
  }

  loggedin() {
    this.loggedinUser = localStorage.getItem('token') as string;
    return this.loggedinUser;
  }
  onlogout() {
    localStorage.removeItem('token');
    this.alertyfy.success("Successuly logged out!")
  }

}
