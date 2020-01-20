var express= require('express');
var conn=require('../config/connect');
var Base64 = require('js-base64').Base64;
var insert=express.Router();
insert.post('/',function(req,res){
    var name=req.body.name;
    var img=req.body.img;
    console.log(name);
  
    var base64Data = img.replace(/^data:image\/png;base64,/, "");
    // console.log("base64",base64Data)
    require("fs").writeFile(`../music_player/public/${name}.png`, base64Data, 'base64', function(err) {
      console.log(err);
    });
    img=`${name}.png`;
    var sql=`INSERT INTO Album (Album_Name, Album_Img)
    VALUES ('${name}', '${img}');`
     
  
    conn.query(sql,function(err,result){
        if (err) throw err;
        console.log("1 record inserted");
    })

  });
  


module.exports=insert;