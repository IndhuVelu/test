import { Component, OnInit } from '@angular/core';
import { TrainService } from '../../service/train.service';

import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {
  user = {
    from: "",
    to: "",
    date: "",
  }
  register;
  register1;
  bntStyle;
  from1=[];
  to1=[];
  disfrom=0
  disto=0
  constructor(private train:TrainService,private router:Router) { }

  ngOnInit(): void {
    this. bntStyle = 'btn-default';
  }
  handleFrom=async(event)=> {
   
    await this.train.From(event.target.value).subscribe(data=>{
      this.register=data
      let unique = [...new Set( this.register.map(item => item.from))];
      this.from1=unique;
      this.disfrom=1
      console.log(this.from1);
    
    })
    if(this.user.date){
      this.handleSearch();
    }
    
  }
  handleTo=async(event)=> {
    await this.train.ToSearch(event.target.value).subscribe(data=>{
      this.register=data
      const unique = [...new Set( this.register.map(item => item.to))];
      this.to1=unique
      this.disto=1
      console.log(this.to1)
    })
    if(this.user.date){
       this.handleSearch();
    }
  }
  onsearch(){
    this.handleSearch();
  }
  handleSearch=async()=> {
    await this.train.Search(this.user).subscribe(data=>{
      this.register1=data
      console.log(this.register1)
    });
    console.log(this.user.date)
  }
  handledisplay=async(event) =>{
    this.user.from=event.target.dataset.fromvalue;
    console.log(event.target.dataset.fromvalue)
    this.disfrom=0
    if(this.user.date){
      this.handleSearch();
    }
    
  }
  handledisplayTo=async(event) =>{
    this.user.to=event.target.dataset.tovalue;
    console.log(event.target.dataset.tovalue)
    this.disto=0
    if(this.user.date){
      this.handleSearch();
    }
  }
  tConvert(time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    time.splice(3,1);
    return time.join (''); // return adjusted time or original string
  }
  redirectTo(route: string, data: any): void {
    this.train = data;
    console.log("cdsvdscds11111111111111111",this.train)
    this.router.navigateByUrl(`/${route}`);
  }
  handleName(){
    this.bntStyle = 'btn-change';
     this.train.HandleName(this.user).subscribe(data=>{
      this.register1=data
   
    });
  }
  handleRevName(){

    this.train.HandleRevName(this.user).subscribe(data=>{
     this.register1=data
   });
  }
   handleDepart(){
  
  this.train.HandleDepart(this.user).subscribe(data=>{
   this.register1=data
    });
  }
  handleRevDepart(){
   
    this.train.HandleRevDepart(this.user).subscribe(data=>{
    this.register1=data
  });
  }  
  handleArrival(){
  
  this.train.HandleArr(this.user).subscribe(data=>{
   this.register1=data
    });
  }
  handleRevArrival(){
  
    this.train.HandleRevArrival(this.user).subscribe(data=>{
    this.register1=data
    });
  }


}
