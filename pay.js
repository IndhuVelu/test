var arr=new Array();
function names(divName){
                var bill,people,share;
                bill=document.getElementById("total").value;
                people=document.getElementById("reserved").value;
                share= bill/people;
                for(let i=1;i<= people;i++)
                {
                    var newdiv = document.createElement('div');
                    newdiv.innerHTML = "Entry " + (i) + " <br><input id =name"+i+" type='text' >";
                    arr.push("name"+i);
                    console.log(arr);
                    document.getElementById(divName).appendChild(newdiv);
                    
                }
                var newdiv1 = document.createElement('div');
                newdiv1.innerHTML = "<br> <br> "+share;
                document.getElementById(divName).appendChild(newdiv1);
            } 
function viewshare(){
                var bill,people,share;
                bill=document.getElementById("total").value;
                people=document.getElementById("reserved").value;
                share= bill/people;
    
                var myTableDiv = document.getElementById("myDynamicTable");
                    
                var table = document.createElement('TABLE');
                table.border='1';
                
                var tableBody = document.createElement('TBODY');
                table.appendChild(tableBody);
                    
                for (var i=0; i<arr.length; i++){
                    var tr = document.createElement('TR');
                    tableBody.appendChild(tr);
                    tr.width='100';
                    
                    var td = document.createElement('TD');
                    td.width='200';
                    td.appendChild(document.createTextNode(document.getElementById(arr[i]).value));
                    td.appendChild(document.createTextNode(""));
                    td.appendChild( document.createTextNode(""));
                    td.appendChild(document.createTextNode(share));
                    tr.appendChild(td);
                         myTableDiv.appendChild(table);
      
                     }   
}  
