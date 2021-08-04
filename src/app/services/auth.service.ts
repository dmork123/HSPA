import { Injectable } from '@angular/core';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
authUser(user: any) {
  let UserArray = [];
  if (localStorage.getItem('Users')) {
    UserArray = JSON.parse(localStorage.getItem('Users') as string);
  }
  console.log(user.userName);
  console.log(user.password);
  console.log(UserArray);
  console.log('here');
  console.log(UserArray.find((p:User) => p.userName===user.userName))
  console.log('hereeee');
  return UserArray.find((p:User) => (p.userName === user.userName && p.password === user.password));
}
}
