const router2 = (app) => {
  const resevedDetails = require('../controller/reservedDetails');
  const auth = require("../service/auth")
  const authVerify=require("../service/verify")
  // adding  user reserved details 
  app.post('/reservedAdd', async function (req, res) {
    var result = await resevedDetails.reservedAdd(req, res);
    try{
      res.send(result);
    }
    catch(e){
      res.send(e)
    }
  });
  // adding user's reserved seats
  app.post('/reserved', async function (req, res) {
    var result = await resevedDetails.reservedSeat(req, res);
    try{
      res.send(result);
    }
    catch(e){
      res.send(e)
    }

  });
  // vertifying the user through authVerify
  app.post('/trainUser',authVerify)

  // fetching the completed book details
  app.post('/completedBooking', async function (req, res) {
    var result = await resevedDetails.completedBooking(req,res);
    try{
      res.send(result);
    }
    catch(e){
      res.send(e)
    }

  });
  // removing reserved seats 
  app.post('/cancelBooking', async function (req, res) {
    var result = await resevedDetails.cancelBooking(req, res);
    try{
      res.send(result);
    }
    catch(e){
      res.send(e)
    }


  });
// fetching the upcoming booking deatils
  app.post('/upcomingBooking', async function (req, res) {
    var result = await resevedDetails.upcomingBooking(req,res);
    try{
      res.send(result);
    }
    catch(e){
      res.send(e)
    }
   
  });
// sending booking details through  mail
  app.post('/reservedEmail', async (req, res) => {
    await resevedDetails.reservedEmail(req, res);
  })

  // sending mail details
  app.post('/inviteMailDetails', async (req, res) => {
    var result = await resevedDetails.inviteMailDetails(req, res);
    try{
      res.send(result);
    }
    catch(e){
      res.send(e)
    }
  })

  // sending booking details through  mail
  app.post('/inviteMail', async (req, res) => {
    await resevedDetails.inviteMail(req, res);
  })
}

module.exports = router2;