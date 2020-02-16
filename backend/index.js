var express = require('express');
var conn=require('./config/connect');
var bodyParser=require('body-parser');
var cors=require("cors");
const jwt = require("jsonwebtoken");
var app = express();
var  nodemailer = require("nodemailer");

var SignUps = require('./models').SignUp;
var train_detail = require('./models').Train_Details;




app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));


app.post('/head',(req,res)=>{
  const token=req.body.token;
  console.log(req.body)
  // console.log(JSON.parse(req.body.token).token)
  jwt.verify(token,'secretkey' ,async (err,authData)=>{
     
         await res.send(authData);
          console.log(authData);
    })
})


app.post('/signup',async(req,res)=>{
    console.log(req.body)
  await SignUps.create({
      Name:req.body.name,
      Email:req.body.email,
      Password:req.body.password
  })
  .then(SignUps=>{
      res.send({'status':true});
  })
  .catch(err=>{
      res.send({"status":false});
  });
});


app.post('/login',async (req,res)=>{
  var name=req.body.name;
  var password=req.body.password;
  let response=await SignUps.findOne({
     where:{
      Name: name,
      Password:password
      }
  })
  
  .then(response=>{
    // console.log(result[0].id)
        const user = {
          name:name,
          password:password,
          // SignUp_id:result[0].id
        };
        jwt.sign({user},'secretkey', (err,token) => {
          if (err) {
            res.sendStatus(403);
          } 
          else {
            res.json({
              token
            });
            
          }
        });

  })
  .catch(err=>{
      res.send(err);
  });
});


let transporter = nodemailer.createTransport({
 
  service: "gmail",
  auth: {
    user: 'indhunandhini983@gmail.com',
    pass: 'indhunandhini31599'
  }
});
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});


app.post('/email',async (req,res)=>{
  var changemail= req.body.changemail;

  await SignUps.findAll({
    where:{
     Email: changemail,
     
     },
 },)
 .then(result=>{
  if (result.length == 0) {
    console.log("not exits");
    res.send( "emaildoesnotexist");
  }
  else if (result.length > 0) {
    var mail = {
      from: "indhunandhini983@gmail.com",
      to: req.body.changemail,
      subject: "Password Recovery Email",
      text:
  
        "Please reset your passoword using the below link.  Reset Link:http://localhost:3000/resetpass/" +
        req.body.changemail +
        ""
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        // console.log(err);
        res.json({msg: "fail", err: err});
      } else {
        // console.log(data);
        res.json({  msg: "success" });
      }
    });    
  }
  
 })
 .catch(err=>{
     res.send(err);
 });

})

app.post('/ResetEmail',async function(req,res){
 
  var newpass = req.body.newpass;
  var Email_id = req.body.Email_id;

  await SignUps.update({ Password: newpass }, {
    where: {
      Email: Email_id
    }
  })
  .then(result=>{
    res.json("updated")
  })
  .catch(err=>{
   res.send(err);
  });


});

app.post('/fromsort',async function(req,res){
  var Op=require('sequelize').Op
  var from = req.body.startingLocation;
  console.log(from);
  await train_detail.findAll({
    attributes:['from'],
    where:{
    from:{
      [Op.like]:`%${from}%`
    }
  }
  })

  .then(result=>{
  
    res.send(result);
      })
 .catch(err=>{
     res.send(err);
       }); 
  
});
app.post('/tosort',async function(req,res){
  var Op=require('sequelize').Op
  var to = req.body.endingLocation;
  console.log(to);
  await train_detail.findAll({
    attributes:['to'],
    where:{
    to:{
      [Op.like]:`%${to}%`
    }
  }
  })

  .then(result=>{
  
    res.send(result);
      })
 .catch(err=>{
     res.send(err);
       });  
  
});
app.post('/search',async function(req,res){
  console.log('sasa',req.body)
  var from = req.body.startingLocation;
  var to = req.body.endingLocation;
  var date = req.body.date;
  var offset=req.body.offset;
  await train_detail.findAll({
    where:{
      from: from,
      to:to,
      },
      order: [
        ['Depart_Time', 'ASC'],
        ['TrainName', 'ASC'],
    ],
    limit: 5,
    offset: (5*offset), 
   
  },)
  .then(result=>{
    
      res.send(result);
    
      })
 .catch(err=>{
    res.send({"status":false});
       }); 
});

app.post('/namesort',async function(req,res){
  var from = req.body.startingLocation;
  var to = req.body.endingLocation;
  await train_detail.findAll({
    where:{
      from: from,
      to:to,
      },
      order: [
        ['TrainName', 'ASC'],
    ],
  },)
  .then(result=>{
     res.send(result);
      })
 .catch(err=>{
     res.send(err);
       }); 
});
app.post('/namerevsort',async function(req,res){
  var from = req.body.startingLocation;
  var to = req.body.endingLocation;
  await train_detail.findAll({
    where:{
      from: from,
      to:to,
      },
      order: [
        ['TrainName', 'DESC'],
    ],
  },)
  .then(result=>{
     res.send(result);
      })
 .catch(err=>{
     res.send(err);
       }); 
});
app.post('/arrivalsort',async function(req,res){
  var from = req.body.startingLocation;
  var to = req.body.endingLocation;
  await train_detail.findAll({
    where:{
      from: from,
      to:to,
      },
      order: [
        ['Arrival_Time', 'ASC'],
    ],
  },)
  .then(result=>{
     res.send(result);
      })
 .catch(err=>{
     res.send(err);
       }); 
});
app.post('/arrivalrevsort',async function(req,res){
  var from = req.body.startingLocation;
  var to = req.body.endingLocation;
  await train_detail.findAll({
    where:{
      from: from,
      to:to,
      },
      order: [
        ['Arrival_Time', 'DESC'],
    ],
  },)
  .then(result=>{
     res.send(result);
      })
 .catch(err=>{
     res.send(err);
       }); 
});
app.post('/departsort',async function(req,res){
  var from = req.body.startingLocation;
  var to = req.body.endingLocation;
  await train_detail.findAll({
    where:{
      from: from,
      to:to,
      },
      order: [
        ['Depart_Time', 'ASC'],
    ],
  },)
  .then(result=>{
     res.send(result);
      })
 .catch(err=>{
     res.send(err);
       }); 
});
app.post('/departrevsort',async function(req,res){
  var from = req.body.startingLocation;
  var to = req.body.endingLocation;
  await train_detail.findAll({
    where:{
      from: from,
      to:to,
      },
      order: [
        ['Depart_Time', 'DESC'],
    ],
  },)
  .then(result=>{
     res.send(result);
      })
 .catch(err=>{
     res.send(err);
       }); 
});

app.listen(3008,()=>{
    console.log('server running 3008');
});

