import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  trainuser=(user)=>{
    return this.http.post("http://localhost:5000/trainuser",user)
  }
  reserved=(details)=>{
    return this.http.post("http://localhost:5000/reservedadd",details)
  }
  reservedemail=(emaildetails)=>{
    console.log("reaserved addddd",emaildetails)
    return this.http.post("http://localhost:5000/reservedemail",emaildetails)
  }
  booked=(booked)=>{
    console.log("reaserved",booked)
    return this.http.post("http://localhost:5000/reserved",booked)
  }
}
