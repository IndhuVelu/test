const reserved= require('../models').reserved_Details;
var  nodemailer = require("nodemailer");
var  cron = require("node-cron");
const reserved_details=()=>{

}
    reserved_details.reservedadd=async(req,res)=>{
        let response = reserved.create({
            Trainid:req.body.trainid,
            seat:req.body.seat,
            signup_name:req.body.signup_id,
            status:req.body.status
            
        })
    return response
    }
    reserved_details.reservedseat=async(req,res)=>{
      let response = reserved.findAll({
          Trainid:req.body.trainid,
          signup_name:req.body.signup_id,
    
          
      })
  return response
  }
    reserved_details.completedbooking=async(user)=>{
      let response=  await reserved.findAll({
            where:{
              signup_name: user,
             status:0
            }
          })
          return response;
  
    }
    reserved_details.upcomingbooking=async(user)=>{
      let response=  await reserved.findAll({
            where:{
              signup_name: user,
             status:1
            }
          })
          return response;
  
    }
    reserved_details.cancelbooking=async(req)=>{
      console.log("2222222222",req.body.user.id)
      let response
      try{
         await reserved.destroy({
            where:{
              // signup_name: req.user.signup_id,
              id:req.body.user.id
            }
          })
          response = {status:true}
        }
        catch(e){
          console.log(e)
          response={status:false}
        }
        return response;
  
    }
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
        //   console.log("Server is ready to take messages");
        }
      });
      
    reserved_details.reservedemail=async(req,res)=>{
        var mail = {
            from: "indhunandhini983@gmail.com",
            to: req.body.email,
            subject: "Ticket Booking Details",
            text:
              "Your Booking Details :  " +"\n" + "Name :" +req.body.name + "\n" + "Age :" + req.body.age  + "\n"+ "Gender : " +req.body.gender +  "\n"+"Your Ticket Cost : " +req.body.cost + "\n"+
              "Train id : " + req.body.trainid+"\n" + " Yours seats is: " + req.body.seatid +"\n"
              
              
              
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
    cron.schedule("1 *  * *  * *", function() {
        console.log("---------------------");
        console.log("Running Cron Job");
        var datetime = new Date();
          reserved.update(
            {status:0},
            
              { where:{
                createdAt:{
                 $lte:Date.now()
               } 
             }
              }
          )
          
      });
      


module.exports=reserved_details;
