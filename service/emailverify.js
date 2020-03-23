var nodemailer = require("nodemailer");
const mailVerify =(res,next)=>{
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
          res.sendStatus(403);
        } else {
            console.log("success")
            next();
        }
      });
}
module.exports = mailVerify;