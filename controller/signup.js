const signups=require('../models').signup;
const jwt = require("jsonwebtoken");
const signup=()=>{

}
  //  Inserting the signup Values into the signup table 
signup.create=async(req)=>{
let response
   try{
    await signups.create({
        Name:req.body.Name,
        Email:req.body.Email,  
        Password:req.body.Password,
        isadmin:req.body.value
    })
    response = {status:true}
   } 

   catch(e){
       console.log(e)
    response={status:false}
}
return response 
}
// Login - Check the user's username and password available in the signup table
signup.login=async(req,res)=>{
    var name=req.body.name;
    var password=req.body.password;
   await signups.findAll({
       where:{
        Name: name,
        Password:password
        }
    })
   
    .then((result)=>{
      console.log("----------------------------------",result[0].Email)
      if (result.length > 0) {
        const user = {
          name:name,
          password:password,
          isadmin:result[0].isadmin,
        };
        jwt.sign({user},'secretkey', (err,token) => {
          if (err) {
            res.sendStatus(403);
          } 
          else {
            res.json({
              token
            });
            
          }
        });
      }
      else if(result.length === 0){
        res.json("username and password doesn't exist")
      }  
         
  
    })
    .catch(err=>{
        res.send(err);
    });
}
 //  changing authority user to admin
signup.userToAdmin=async(req,res)=>{
  var Name = req.body.Name;
  await signups.update({ isadmin: 1 }, {
    where: {
      Name: Name
    }
  })
  .then(
    res.json("updated")
  )
  .catch(err=>{
   res.send(err);
  });
}
  // changing authority admin to user
signup.adminToUser=async(req,res)=>{
  var Name = req.body.Name;
  await signups.update({ isadmin: 0 }, {
    where: {
      Name: Name
    }
  })
  .then(
    res.json("updated")
  )
  .catch(err=>{
   res.send(err);
  });
}

//  fetching email details
signup.signupDetails = async (res,req) =>{
  let response;
  try{
    var a =  await signups.findAll({
        attributes:[['Name', 'signupName'],['Email', 'mailId']],
      })
      response = a
  }
  catch(err){
    response={err}
  }
  
  return response;



}
   
module.exports=signup;