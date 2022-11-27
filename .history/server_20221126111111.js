const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

//middleware
app.use(express.static("public"));
app.use(express.json());

//server
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Public/index.html");
});

//route
app.post("/", (req, res) => {
  console.log(req.body);
});

//running port
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
