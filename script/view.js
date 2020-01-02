

   
    var bookedDetails = JSON.parse(localStorage.getItem('bookedDetails'));

    bookedDetails.forEach(element => {
        if(element[3]===localStorage.getItem('x')){
            var div1= document.createElement("div");
            div1.style.display="flex";
            div1.style.alignItems="center";
            // div1.style.flexDirection="column";
            div1.style.padding="20px";
            var maindiv=document.createElement("div");
            div1.appendChild(maindiv);
            var div2=document.createElement("div");
            var div2t=document.createTextNode('UserId and Name'+' '+': '+ localStorage.getItem('x') +' / '+localStorage.getItem('w') );
            div2.appendChild(div2t);
            maindiv.appendChild(div2);
            // div1.appendChild(div2);
            div2.style.padding="10px";

            var div2= document.createElement("div");
            var div2t=document.createTextNode('Deprature and Destnation'+' '+': '+ element[0] +' / '+element[1] );
            div2.appendChild(div2t);
            maindiv.appendChild(div2);
            // div1.appendChild(div2);
            div2.style.padding="10px";
            var div2= document.createElement("div");
            var div2t=document.createTextNode('Date'+' '+': '+element[2]);
            div2.appendChild(div2t);
            maindiv.appendChild(div2);
            // div1.appendChild(div2);
            div2.style.padding="10px";
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
            document.getElementById("myDynamic").appendChild(div1);
        }

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

    
