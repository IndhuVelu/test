import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http:HttpClient) { }
  Header=(user)=>{
    return this.http.post("http://localhost:5000/head",user)
  }
}
