const express = require("express");
const dotenv = require("dotenv");
let nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const creds = require("./credential.json");
const cors = require("cors");

dotenv.config();

let app = express();

app.use(cors());

const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/mail", (req, res, next) => {
  var email = req.body.email;
  var message = req.body.message;
  var subject = req.body.subject;
  var name = req.body.name;
  var me = "shyamsunders507@gmail.com";
  // var company = req.body.company;

  const mailOptions = {
    from: me,
    to: email,
    bcc: me,
    subject: subject,
    // text: "Plaintext version of the message",
    html: `${"<h3>Thankyou for contacting me, I will contact you soon.</h3>"}${"Your Name: " + name} <br/>${"Your Email: " + email} <br/>${"Your Message: " + message} <br/> 
    <p>Regards<br/>
    <strong>Shyam Sunder Singh</strong><br/>
    <strong>Final year student @IIT (BHU), Varanasi</strong><br/>
    <a href="https://shyam-portfolio-web.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio Link</a></p>`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: err,
      });
      console.log(err);
    } else {
      res.json({
        status: "success",
      });
      console.log("email sent", +data.response);
    }
  });
});

transporter.verify(function (err, success) {
  if (err) {
    console.log(err);
  } else {
    console.log("server is ready to take the emails");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.info("server has started", PORT));
