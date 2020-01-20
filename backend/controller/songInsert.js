var express= require('express');
var conn=require('../config/connect');
var Base64 = require('js-base64').Base64;
var songInsert=express.Router();
songInsert.post('/',function(req,res){
    var songname=req.body.songname;
    var song=req.body.song;
    var a_id=req.body.a_id;
  
    
    var base64Data = song.replace(/^data:audio\/mp3;base64,/, "");
    require("fs").writeFile(`../music_player/public/${songname}.mp3`, base64Data, 'base64', function(err) {
      console.log(err);
    });
    song=`${songname}.mp3`
    var sql=`INSERT INTO Song (Song_Name, song_url,Album_id)
    VALUES ('${songname}', '${song}','${a_id}');`
     
  
    conn.query(sql,function(err,result){
        if (err) throw err;
        console.log("1 record inserted");
    })

  });
  


module.exports=songInsert;