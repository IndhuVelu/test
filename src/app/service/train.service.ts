import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http:HttpClient) { }

  From=(user)=>{
    return this.http.get(`http://localhost:5000/fromsort?user=${user}`,)
  }
  ToSearch=(user)=>{
    return this.http.get(`http://localhost:5000/tosort?user=${user}`,)
  }
  Search=(user)=>{
    return this.http.post(`http://localhost:5000/search`,{user})
  }
  HandleName=(user)=>{
    return this.http.post(`http://localhost:5000/namesort`,{user})
  }
  HandleRevName=(user)=>{
    return this.http.post(`http://localhost:5000/namerevsort`,{user})
  }
  HandleDepart=(user)=>{
    return this.http.post(`http://localhost:5000/departsort`,{user})
  }
  HandleRevDepart=(user)=>{
    return this.http.post(`http://localhost:5000/departrevsort`,{user})
  }
  HandleArr=(user)=>{
    return this.http.post(`http://localhost:5000/arrivalsort`,{user})
  }
  HandleRevArrival=(user)=>{
    return this.http.post(`http://localhost:5000/arrivalrevsort`,{user})
  }
}
