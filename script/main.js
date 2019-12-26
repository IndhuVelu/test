let place={'coimbatore':Array('Gandhipuram','Singanallur','Saibaba colony','Metupalayam'),
            'chennai': Array('Thambaram','Anna nagar', 'Poyas garden', 'guindy'),
            'salem': Array('Metur','Yerkadu','Fairlands','junction'),
            'madurai': Array('Metur','Yerkadu','Fairlands','junction'),
            'tuticorin': Array('Metur','Yerkadu','Fairlands','junction')
        }

if (!localStorage.getItem('startEnd')){
    localStorage.setItem('startEnd',JSON.stringify({}));
    // localStorage.setItem('end',JSON.stringify(Array()));
    localStorage.setItem('locations',JSON.stringify(place));
    localStorage.setItem('busDetails',JSON.stringify(Array()));
}


function getDetails(){
    var tempArr=JSON.parse(localStorage.getItem('busDetails'));
    var travellsName = document.getElementById('travells-name').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var seats = document.getElementById('seats').value;
    if (from =='' || to =='' || seats == '' || travellsName==''){
        alert('Please enter values');
        return
    }
    tempArr.push(Array(travellsName,from,to,seats));
    localStorage.setItem('busDetails',JSON.stringify(tempArr));
    
    var startEnd={}
    tempArr.forEach(element => {
        startEnd[element[1]]= Array();
    });
    tempArr.forEach(element => {
        startEnd[element[1]].push(element[2]);
    });
    console.log(startEnd);
    
    localStorage.setItem('startEnd',JSON.stringify(startEnd));

}