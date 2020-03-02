import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../service/signup.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = {
    Name: "",
    Email: "",
    Password: "",
    confrimpassword: "",
    value:''
  }
  register;

  constructor(private signup:SignupService,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit=async()=> {
    console.log(this.user)
    if(this.user.Name==""||this.user.Email==""||this.user.Password==""||this.user.confrimpassword=="" || this.user.value ==""){
      alert('please fill the details')
    }
    else{
      await this.signup.Signup(this.user).subscribe(data=>{
        this.register=data
        console.log(this.register.status)
        if(this.register.status === false)
        {
            alert('Username is already taken')
        }
        else{
          this.router.navigate(['/login'])
        }
      });
      this.clear()
    }
   
    
  }
  clear=()=>{
    this.user={
      Name: "",
      Email: "",
      Password: "",
      confrimpassword: "",
      value:''
    }
  }

}





  
