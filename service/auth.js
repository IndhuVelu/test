const jwt = require("jsonwebtoken");

const verifyToken =(req,res,next)=>{
    // console.log("heloo",req.body);
    const token = req.body.token;
    // console.log("this is token->",token)
    jwt.verify(token, 'secretkey', async (err) => {
      if(err){
          // console.log("failed!!!");
        res.sendStatus(403);
      }
      else{
          // console.log("success")
          next();
          
      }
    })

}
module.exports = verifyToken;