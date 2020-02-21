const router1=(app)=>{
    const event= require('../controller/event');
    const jwt = require("jsonwebtoken");

    app.post('/add_event',async(req,res)=>{
        console.log(req.body)
        var result=await event.create(req,res);
        res.send(result);
    });
    app.post('/heads',(req,res)=>{
        const token=req.body.token;
        console.log(req.body)
        jwt.verify(token,'secretkey' ,async (err,authData)=>{
               await res.send(authData);   
          })
      })
    app.post('/event_list',async (req,res) =>{
        var result=await event.eventlist(req,res);
        res.send(result);
    })
    app.post('/add_event_to_calender',async (req,res) =>{
        console.log(req.body)
        var result=await event.addeventlist(req,res);
        res.send(result);
    })
    app.post('/event_calender',async (req,res) =>{
        console.log(req.body)
        var result=await event.mycalender (req,res);
        res.send(result);
    })

}


module.exports=router1;