const express = require("express");
const port = process.env.PORT || 3000;
const nodemailer = require("nodemailer");

const app = express();

//middleware
app.use(express.static("Public"));
app.use(express.json());

//server
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Public/index.html");
});

//route
app.post("/", (req, res) => {
  console.log(req.body);
  //nodemailer handlers
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ukrbdeecom@gmail.com",
      pass: "ukrbd@bd721",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "ukrbdeecom@gmail.com",
    subject: `Message From ${req.body.email}: ${req.body.subject}`,
    text: req.body.message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Message ", info);
      res.send("success!");
    }
  });
});

//running port
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
