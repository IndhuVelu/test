import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedInStatus = false

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }
 get isLoggedIn() {
    return this.loggedInStatus
  }
  constructor(private http:HttpClient) { }
  Login=(user)=>{
    return this.http.post("http://localhost:5000/login",user)
  }
}
