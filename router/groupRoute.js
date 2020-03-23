const router3 = (app) => {
    const groupDetails = require('../controller/groupDetails');
  

    //  groupDetails.inviteDetails();
     app.post('/inviteDetails', async (req, res) => {
        var result=await  groupDetails.inviteDetails(req, res);
         groupDetails.creategroup(result);
      })
      app.post('/GetGroupDetails', async (req, res) => {
        await  groupDetails.GetGroupDetails(req, res);
        
      })
      app.post('/getMessage', async (req, res) => {
        await  groupDetails.getMessage(req, res);
        
      })
    
 
  }
  
  module.exports = router3;