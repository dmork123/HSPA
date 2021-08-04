import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private alertyfy: AlertifyService) { }

  ngOnInit() {
  }
  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);

    if(token) {
      localStorage.setItem('token', token.userName)
      this.alertyfy.success("Login Successfull")
    } else {
      this.alertyfy.error("Login Failed try again")
    }

  }
}
