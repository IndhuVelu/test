import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user = {
    name: "",
    password: "",
  }
  register;

  constructor(private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit=async()=> {
    console.log(this.user)
    if(this.user.name==""||this.user.password==""){
      alert('please fill the details')
    }
    else{
      await this.login.Login(this.user).subscribe(data=>{
        this.register=data
        console.log(this.register)
        if(this.register.errors){
            alert('Invalid Usename and Password')
        }
        else{
          console.log("helo")
          localStorage.setItem('token',JSON.stringify(data));
          this.router.navigate(['/train'])
          this.login.setLoggedIn(true)
        }
      });
      this.clear()
    }
   
  
  }
  clear=()=>{
    this.user={
      name: "",
      password: "",
   
    }
  }
}
