const ticket = require('../models').ticket;
const ticketDetails = () => {

}

ticketDetails.createTicket = async(data)=>{
    console.log("emittt",data)
    try{
         ticket.create({
          trainId: data.trainId,
          seatId: data.seatId,
          signupId: data.signupId,
        })
      
      }
    catch{
      response={status:500,msg:e,}

    }
}
module.exports=ticketDetails;