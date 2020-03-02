import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  constructor(private http:HttpClient) { }
  Change=(user)=>{
    return this.http.post("http://localhost:5000/UserToAdmin",user)
  }
  Change1=(user)=>{
    return this.http.post("http://localhost:5000/AdminToUser",user)
  }
}
