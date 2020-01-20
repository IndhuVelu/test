var express= require('express');
var conn=require('../config/connect');

var post=express();
post.post('/p',function(req,res){

    var sql1=`select * from Album`;
    console.log(req);
    conn.query(sql1,function(err,result){
      if (err) throw err;
      res.send("post fetched");
      console.log(sql1);
  })
  });
   


module.exports=post;