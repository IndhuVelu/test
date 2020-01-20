var express = require('express');
var conn=require('./config/connect');
var bodyParser=require('body-parser');
var cors=require("cors");


var app = express();
app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.get('/hi', function(req, res){
   res.send('khfldh');
});


app.use('/album',require('./router/add'));
app.get('/p',function(req,res){

  var sql1=`select * from Album`;
  conn.query(sql1,function(err,result){
    if (err) throw err;
    res.send(result);
  
})
});


app.post('/sp',function(req,res){
  var addId=req.body.addId;
  console.log(addId);
  var sql1=`select * from Song where Album_id=${addId} `;
  conn.query(sql1,function(err,result){
    if (err) throw err;
    res.send(result);
  
})
});

app.listen(3002,()=>{
    console.log('server running 3002');
});