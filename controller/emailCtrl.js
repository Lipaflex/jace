const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");
const sendEmail = asyncHandler(async (data,req, res) => {
    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let mailOptions = {
    from: data.from,
    to: data.to,
    subject: data.subject,
    html: data.html
  };

  transporter.sendMail(mailOptions, function(err, info){
    if(err) {
      console.log(err)
      res.json({msg: err})
    } else {
      console.log('Email sent: ' + info.response);
      res.json({msg: 'success'})
    }
  });
    
});