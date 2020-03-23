const jwt = require("jsonwebtoken");

const verifyToken1 =(req,res,next)=>{
    // console.log("heloo",req.body);
    const token = req.body.token;
    // console.log("this is token->",token)
    jwt.verify(token, 'secretkey', async (err, authData) => {
      if(err){
          // console.log("failed!!!");
        res.sendStatus(403);
      }
      else{
          // console.log("success")
          res.send(authData);  
      }
    })

}
module.exports = verifyToken1;