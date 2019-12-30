let user= [Array('1', 'indhu',  'indhu123'),Array('2', 'dharshini',  'dharshini123'),Array('3', 'prakash',  'prakash123')];
 
let from=Array('agra','amernath','bangalore','bhopal','chennai','coimbatore');
let to=Array('karnataka','andhra','kerala','salem','madurai','theni');

localStorage.setItem('userDetails',JSON.stringify(user));
var userDetails = JSON.parse(localStorage.getItem('userDetails'));

localStorage.setItem('fromLocation',JSON.stringify(from));
var fromLocation = JSON.parse(localStorage.getItem('fromLocation')); 

localStorage.setItem('toLocation',JSON.stringify(to));
var fromLocation = JSON.parse(localStorage.getItem('toLocation')); 

function checklogin(){
    var username =  document.getElementById('username').value;
    var password =  document.getElementById('password').value;
     var c=0;
    userDetails.forEach(element => {
        if( (username === element[1]) && (password === element[2])){
            localStorage.setItem('x',element[0]);
            localStorage.setItem('w',element[1]);
            localStorage.setItem('y',1);
            window.location.href = "bus.html";
            c=1;
        }
    });
    if(c!=1){
        alert("Please enter correct details");  
        localStorage.setItem('y',0);
    }    
}

function loads(){
    var x=document.createElement("DIV");
    var xtext=document.createTextNode(localStorage.getItem('x'));
    x.appendChild(xtext);
     var y=document.createElement("div");
    var ytext=document.createTextNode(localStorage.getItem('w'));
    y.appendChild(ytext);
    var logout=document.createElement("a");
    var ltext=document.createTextNode("Logout");
    logout.appendChild(ltext);
    logout.addEventListener("click", func2);
    document.getElementById("profile").appendChild(x);
    document.getElementById("profile").appendChild(y);
    document.getElementById("profile").appendChild(logout);

    function func2(){
        window.location.href="login.html";
    }

}

from.forEach(element =>{
    var option = document.createElement('option');
    option.value=element;
    option.id = element;
    option.appendChild(document.createTextNode(element));
    document.getElementById('listul').appendChild(option);
});

to.forEach(element =>{
    var option = document.createElement('option');
    option.value=element;
    option.id = element;
    option.appendChild(document.createTextNode(element));
    document.getElementById('listul1').appendChild(option);
});


//Book onclick Function

function book(){
    
    var start =  document.getElementById('listul').value;
    var to =  document.getElementById('listul1').value;
    var date =  document.getElementById('date').value;

     var booked=[];
    var booked=JSON.parse(localStorage.getItem('bookedDetails'));
    if (start =='' || to =='' || date == '' ){
        alert('Please enter values');
        return
    }
    
   
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    var today1=  yyyy + "-" + mm + "-" + dd ;
    

    var yesterday = new Date();
    var dd = String(today.getDate()-1).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    var yesterday1=  yyyy + "-" + mm + "-" + dd ;
    
    if(date === today1 || date === yesterday1)
    {
        var div2=document.createElement("div");
        var div2t=document.createTextNode('*please select valid date');
        div2.appendChild(div2t);
        document.getElementById("date_alert").appendChild(div2);
    }
    else{
        booked.push(Array(start,to,date));
        localStorage.setItem('bookedDetails',JSON.stringify(booked));
        var bookedDetails = JSON.parse(localStorage.getItem('bookedDetails'));
        alert("Booked");
    }

}
// show onclick function

function show(){


   
    var bookedDetails = JSON.parse(localStorage.getItem('bookedDetails'));

    var preview =[];
    preview = bookedDetails.slice(0,3);
    
    preview.forEach(element => {
        var div1= document.createElement("div");
    div1.style.display="flex";
    div1.style.flexDirection="column";
    div1.style.padding="20px";
    var div2=document.createElement("div");
    var div2t=document.createTextNode('UserId and Name'+' '+': '+ localStorage.getItem('x') +' / '+localStorage.getItem('w') );
    div2.appendChild(div2t);
    div1.appendChild(div2);
    div2.style.padding="10px";

    var div3= document.createElement("div");
    var div3t=document.createTextNode('Deprature and Destnation'+' '+': '+ element[0] +' / '+element[1] );
    div3.appendChild(div3t);
    div1.appendChild(div3);
    div3.style.padding="10px";
    var div4= document.createElement("div");
    var div4t=document.createTextNode('Date'+' '+': '+element[2]);
    div4.appendChild(div4t);
    div1.appendChild(div4);
    div4.style.padding="10px";
    var button= document.createElement("button");
    var button1=document.createTextNode('Cancel');
    button.appendChild(button1);
    div1.appendChild(button);
    button.id="cancel";
     button.addEventListener("click", func1);
    button.style.width="80px";
    button.style.backgroundColor= "red";
    button.style.borderRadius="12px";
    button.style.height="40px";
    document.getElementById("myDynamicTable").appendChild(div1);


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    var today1=  yyyy + "-" + mm + "-" + dd ;
    
    function func1(){
        if(element[2]==today1)
        {
            alert("can't cancel the booking");
        }
        else{
        alert("Booking canceled");
        div1.style.display="none";
        var temparr=[];
        // temparr=JSON.parse(localStorage.getItem('removeDetails'));
        temparr.push(element);
        localStorage.setItem('removeDetails',JSON.stringify(temparr));
        var removeDetails = JSON.parse(localStorage.getItem('removeDetails'));

        }
    }

    
    
    });
    
}




function show1(){

   
    var bookedDetails = JSON.parse(localStorage.getItem('bookedDetails'));

    bookedDetails.forEach(element => {
        var div1= document.createElement("div");
    div1.style.display="flex";
    div1.style.flexDirection="column";
    div1.style.padding="20px";
    var div2=document.createElement("div");
    var div2t=document.createTextNode('UserId and Name'+' '+': '+ localStorage.getItem('x') +' / '+localStorage.getItem('w') );
    div2.appendChild(div2t);
    div1.appendChild(div2);
    div2.style.padding="10px";

    var div3= document.createElement("div");
    var div3t=document.createTextNode('Deprature and Destnation'+' '+': '+ element[0] +' / '+element[1] );
    div3.appendChild(div3t);
    div1.appendChild(div3);
    div3.style.padding="10px";
    var div4= document.createElement("div");
    var div4t=document.createTextNode('Date'+' '+': '+element[2]);
    div4.appendChild(div4t);
    div1.appendChild(div4);
    div4.style.padding="10px";
    var button= document.createElement("button");
    var button1=document.createTextNode('Cancel');
    button.appendChild(button1);
    div1.appendChild(button);
    button.id="cancel";
    button.addEventListener("click", func);
    button.style.width="80px";
    button.style.backgroundColor= "red";
    button.style.borderRadius="12px";
    button.style.height="40px";
    document.getElementById("myDynamicTable").appendChild(div1);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    var today1=  yyyy + "-" + mm + "-" + dd ;

    function func(){
        if(element[2]==today1)
        {
            alert("can't cancel the booking");
        }
        else{
        alert("Booking canceled");
        div1.style.display="none";
        var temparr=[];
        temparr=JSON.parse(localStorage.getItem('removeDetails'));
        temparr.push(element);
        localStorage.setItem('removeDetails',JSON.stringify(temparr));
        var removeDetails = JSON.parse(localStorage.getItem('removeDetails'));

        
        }
    }
    });

    
}