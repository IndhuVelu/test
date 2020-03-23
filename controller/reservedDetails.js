const reserved = require('../models').reservedDetails;
var nodemailer = require("nodemailer");
var cron = require("node-cron");
const reservedDetails = () => {

}
  // adding  user reserved details 
reservedDetails.reservedAdd = async (req, res) => {
  let response 
  try{
      let a = reserved.create({
        trainId: req.body.trainid,
        seat: req.body.seat,
        signupName: req.body.signup_id,
        status: req.body.status

      })
      response={status:200,msg:"success",data:a}
    }
  catch{
    response={status:500,msg:e,}
  }
  return response
}
  // adding user's reserved seats
reservedDetails.reservedSeat = async (req, res) => {
  let response 
  try{ 
      let a=  reserved.findAll({
        trainId: req.body.trainid,
        signupName: req.body.signup_id,
      })
      response={status:200,msg:"success",data:a}
    }
    catch(e){
      response={status:500,msg:e,}
    }
  return response
}
// fetching the completed book details
reservedDetails.completedBooking = async (req) => {
  console.log(req.body)
  let response 
  try{ 
  let a=await reserved.findAll({
    where: {
      signupName: req.body.signup_id,
      status: 0
      }
    })
    response=a
  }
  catch(e){
    response={status:500,msg:e,}
  }
return response;

}
// fetching the upcoming booking deatils
reservedDetails.upcomingBooking = async (req) => {
  let response 
  try{ 
  let a=await reserved.findAll({
    where: {
      signupName:req.body.signup_id,
      status: 1
      }
    })
    response=a
  }
  catch(e){
    response={status:500,msg:e,}
  }
return response;
}
// removing reserved seats 
reservedDetails.cancelBooking = async (req) => {
  console.log("2222222222", req.body.id)
  let response
  try {
    await reserved.destroy({
      where: {
        id: req.body.id
      }
    })
    response = { status: true }
  }
  catch (e) {
    console.log(e)
    response = { status: false }
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

// sending booking details through  mail
reservedDetails.reservedEmail = async (req, res) => {
  var mail = {
    from: "indhunandhini983@gmail.com",
    to: req.body.email,
    subject: "Ticket Booking Details",
    text:
      "Your Booking Details :  " + "\n" + "Name :" + req.body.name + "\n" + "Age :" + req.body.age + "\n" + "Gender : " + req.body.gender + "\n" + "Your Ticket Cost : " + req.body.cost + "\n" +
      "Train id : " + req.body.trainid + "\n" + " Yours seats is: " + req.body.seatid + "\n"


  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({ msg: "fail", err: err });
    } else {
      res.json({ msg: "success" });
    }
  });
}
cron.schedule("1 *  * *  * *", function () {
  console.log("---------------------");
  console.log("Running Cron Job");
  try{
  reserved.update(
    { status: 0 },

    {
      where: {
        createdAt: {
          $lte: Date.now()
        }
      }
    }
  )
  }
  catch(e){
    console.log("cron catch")
  }

});

reservedDetails.inviteMailDetails = async (req, res) => {
  let response 
  try{
      let a = reserved.findAll({
        attributes: [['GROUP_CONCAT( DISTINCT signupName)', 'signupName'],['trainId', 'trainId']],
group: ['trainId'],

      })
      response=a
    }
  catch{
    response={status:500,msg:e,}
  }
  return response
}


// invite to chat application through  mail
reservedDetails.inviteMail = async (req, res) => {
  var mail = {
    from: "indhunandhini983@gmail.com",
    to: req.body.email,
    subject: "Ticket Booking Details",
    text:
   "Please accept the below link to chat with your friends.  Reset Link:http://localhost:3000/chatter/" +
   req.body.trainId +
   ""

  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({ msg: "fail", err: err });
    } else {
      res.json({ msg: "success" });
    }
  });
}



module.exports = reservedDetails;
