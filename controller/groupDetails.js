const group = require('../models').group;
const reserved = require('../models').reservedDetails;
const message  =require('../models').message;
const groupDetails = () => {

}

groupDetails.inviteDetails = async (req, res) => {
    let response
    try{
       response = await reserved.findAll({
          attributes: [['GROUP_CONCAT( DISTINCT signupName)', 'signupName'],['trainId', 'trainId']],
  group: ['trainId'],
  
        })
       

      }
    catch{
      response={status:500,msg:e,}
    }
    return response
  }

groupDetails.creategroup = async(data)=>{
     let response1 = JSON.stringify(data)
     let parsed=JSON.parse(response1);
    try{
        parsed.forEach(element => {
           group.create({
          groupmembers: element.signupName,
          trainId:element.trainId
        })
         });
      }
    catch(e){
      response={status:500,msg:e,}

    }
}
groupDetails.createMessage = async(data)=>{
    try{
         message.create({
          trainId: data.trainId,
          sender: data.senderid,
          message :data.message,
          groupId : data.groupId
        })
      
      }
    catch{
      response={status:500,msg:e,}

    }
}
groupDetails.GetGroupDetails = async (req, res) => {
    let response
    try{
       response = await group.findAll({
        
        where: {
            trainId: req.body.trainId
          }
        })
       res.send(response)

      }
    catch{
      response={status:500,msg:e,}
      res.send(response);
    }
  
  }
  groupDetails.getMessage = async (req, res) => {
    let response
    try{
       response = await message.findAll({
        attributes: ['trainId','message','sender','groupId','createdAt'],
        where: {
            trainId: req.body.trainId
          }
        })
       res.send(response)

      }
    catch(e){
      response={status:500,msg:e,}
      res.send(response);
    }
  
  }
module.exports=groupDetails;