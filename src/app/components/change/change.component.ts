import { Component, OnInit } from '@angular/core';
import { ChangeService } from '../../service/change.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  user = {
    Name: "",
    
  }
  changer;
  constructor(private authority:ChangeService,private router:Router) { }

  ngOnInit(): void {
  }



  onUserToAdmin=async()=> {
    console.log(this.user)
    if(this.user.Name==""){
      alert('please fill the details')
    }
    else{
      await this.authority.Change(this.user).subscribe(data=>{
        this.changer=data
        console.log(this.changer)
       
      });
      this.clear()
    }
   
    
  }

  onAdminToUser=async()=> {
    console.log(this.user)
    if(this.user.Name==""){
      alert('please fill the details')
    }
    else{
      await this.authority.Change1(this.user).subscribe(data=>{
        this.changer=data
        console.log(this.changer)
       
      });
    }
   
    this.clear()
  }


  clear=()=>{
    this.user={
      Name: "",
      
    }
  }
}
