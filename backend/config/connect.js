const mysql= require('mysql')
 var con= mysql.createConnection({
     host : 'localhost',
     user: "root",
     password: "Nandhini@31",
     database:'musicPlayer'
 });
//  con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");

    // var album = "CREATE TABLE Album (Album_id int NOT NULL AUTO_INCREMENT,Album_Name VARCHAR(255), Album_Img VARCHAR(50),PRIMARY KEY (Album_id))";
    // var song = "CREATE TABLE Song (Song_id int NOT NULL AUTO_INCREMENT,Album_id int,Song_Name VARCHAR(255), Artist_Name VARCHAR(50),Song_url VARCHAR(50) ,PRIMARY KEY (Song_id),FOREIGN KEY (Album_id) REFERENCES Album(Album_id))";
  
    // con.query(song, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });

//   });

module.exports =con;