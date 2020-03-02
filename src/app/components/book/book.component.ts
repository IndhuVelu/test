import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { ActivatedRoute } from '@angular/router';
import { home } from '../../model/home/home.module'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  msg=0;
  reserved;
  recid;
  dataarray=[];
  seletedarray=[]
  home =new home();
  tempArr: any = { "selected": [] };
   newArr = this.tempArr;
    h ;
    i ;
 j  ;
  array=[{id:11},{id:12},{id:21},{id:22},{id:23}]
  array1=[{id:31},{id:32},{id:41},{id:42},{id:43}]
  array2=[{id:51},{id:52},{id:61},{id:62},{id:63}]
  array3=[{id:71},{id:72},{id:81},{id:82},{id:83}]
  tokens = {
    token:JSON.parse( localStorage.getItem('token')).token,
  }
  headtoken;
  details;
  emaildetails
  reservedseats
  bookeddetails
  bntStyle
  constructor(private book: BookService,private route:ActivatedRoute) {

    route.params.subscribe(async(params)=>{
      console.log(params.id)
      this.recid=params.id;
    })
    
   }

  ngOnInit(): void {
    this. bntStyle = 'btn-default';
    
    this.dataarray.push(this.home);
    this.book.trainuser(this.tokens).subscribe(data=>{
      this.headtoken=data
      console.log(this.headtoken)
    });
   
  }
  onAdd(){
   this.home=new home()
   this.dataarray.push(this.home);
   document.getElementById('label').style.backgroundColor = "white";
   document.getElementById('label').style.cursor =  "not-allowed";
   document.getElementById('label3').style.backgroundColor = "white";
   document.getElementById('label3').style.cursor =  "not-allowed";
   document.getElementById('label4').style.backgroundColor = "white";
   document.getElementById('label4').style.cursor =  "not-allowed";
   
  }
  onRemove(index)
  {
    this.dataarray.splice(index);
  }


  onChangeCategory(event, cat: any){ 
    this.tempArr.selected.push(cat.id);
    console.log(this.tempArr);
  }
  onSubmit(){
    this.bntStyle = 'btn-change';
    console.log(this.dataarray)
    console.log("1111111111111111",this.dataarray[0].name)
    console.log(this.tempArr);
    for(this.h = 0; this.h < this.tempArr.selected.length; this.h++) {
      var curItem = this.tempArr.selected[this.h];
      var foundCount = 0;
      // search array for item
      for(this.i = 0; this.i < this.tempArr.selected.length; this.i++) {
          if (this.tempArr.selected[this.i] == this.tempArr.selected[this.h])
              foundCount++;
      }
      if(foundCount > 1) {
          // remove repeated item from new array
          for(this.j = 0; this.j < this.newArr.selected.length; this.j++) {
              if(this.newArr.selected[this.j] == curItem) {                
                  this.newArr.selected.splice(this.j, 1);
                  this.j--;
              }
          }  
      
          this.seletedarray=this.newArr.selected
      }

    
  }
  console.log(this.seletedarray);   
for(this.i=0;this.i<this.seletedarray.length;this.i++){
  this.details={
  
    seat:this.seletedarray[this.i],
    trainid:this.recid,
    signup_id:this.headtoken.user.name,
    status:1,
    
  }
  this.book.reserved(this.details).subscribe(data=>{
    this.reserved=data
    console.log(this.reserved)
  });

  } 
  if(this.seletedarray.length == 0){
    this.seletedarray=this.tempArr.selected;
  }   
  console.log("qqqqqqqqqqqq",this.seletedarray);
   this.emaildetails={
    trainid:this.recid,
    email:"indhu31599@gmail.com",
    name:this.dataarray[0].name,
    age:this.dataarray[0].age,
    gender:this.dataarray[0].value,
    seatid:this.seletedarray,
    cost:(this.dataarray.length)*125

  }

  this.book.reservedemail(this.emaildetails).subscribe(data=>{
    this.reserved=data
    console.log(this.reserved)
    this.msg=1
  });

  this.bookeddetails={
    // seat:this.seletedarray,
    trainid:this.recid,
    signup_id:this.headtoken.user.name,

  }
  this.book.booked(this.bookeddetails).subscribe(data=>{
    this.reservedseats=data
    console.log("reserved seats",this.reservedseats)
  
  });

}
 
   
}
