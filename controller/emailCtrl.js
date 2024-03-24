const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 456,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "lipaflex01@gmail.com",
    pass: "hqqj iokk kqvp wuce",
  },
});

  let info = await transporter.sendMail({
    from: '"Hey 👻" <abc@gmail.com>', // sender address
    to: data.to, // list of receivers
    subject: data.subject, // Subject line
    text: data.text, // plain text body
    html: data.html, // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

});

module.exports = sendEmail;