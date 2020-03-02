import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MybookingService {

  constructor(private http:HttpClient) { }
  trainuser=(user)=>{
    return this.http.post("http://localhost:5000/trainuser",user)
  }
  completedbooking=(user)=>{
    console.log("service",user);
    return this.http.get(`http://localhost:5000/completedbooking?user=${user}`,)
  }

  upcomingbooking=(user)=>{
    return this.http.get(`http://localhost:5000/upcomingbooking?user=${user}`)

  }
  cancelbooking=(user)=>{
    console.log("service11111111",user);
    return this.http.post("http://localhost:5000/cancelbooking",user)
  }

}
