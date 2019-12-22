function names(divName){
                var bill,people,share;
                bill=document.getElementById("total").value;
                people=document.getElementById("reserved").value;
                share= bill/people;
                for(let i=2;i<= people;i++)
                {
                    var newdiv = document.createElement('div');
                    newdiv.innerHTML = "Entry " + (i) + " <br><input type='text' >";
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
                    
                for (var i=0; i<1; i++){
                    var tr = document.createElement('TR');
                    tableBody.appendChild(tr);
                    
                    for (var j=0; j<people; j++){
                        var td = document.createElement('TD');
                        td.width='100';
                        td.appendChild(document.createTextNode(share));
                        tr.appendChild(td);
                    
                        }
                         myTableDiv.appendChild(table);
      
                     }   
}  