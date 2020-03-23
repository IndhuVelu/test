const router=(app)=>{
    const signup=require('../controller/signup');
    const authVerify=require("../service/verify")
     const auth = require("../service/auth")
    //  Inserting the signup Values into the signup table 
    app.post('/signup',async(req,res)=>{
        var result=await signup.create(req,res);
        try{
          res.send(result);
        }
        catch(e){
          res.send(e)
        }
    });
    // vertifying the user through authVerify file
    app.post('/head',authVerify)
      
// Login - Check the user's username and password available in the signup table
      app.post('/login',async (req,res)=>{
        var result=await signup.login(req,res);
        try{
          res.send(result);
        }
        catch(e){
          res.send(e)
        }
      }); 
   //  changing authority user to admin
      app.post('/userToAdmin',auth,async function(req,res){
        await signup.userToAdmin(req,res);
      });
    // changing authority admin to user
      app.post('/adminToUser',auth,async function(req,res){
        await signup.adminToUser(req,res);
      }); 
    // fetching the email details
    app.post('/signupDetails',async function(req,res){
      var result = await signup.signupDetails(req,res);
      try{
        res.send(result);
      }
      catch(e){
        res.send(e)
      }
    })
}

   
module.exports=router;