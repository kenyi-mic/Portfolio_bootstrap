const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

//middleware
app.use(express.static("public"));

//server
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Public/index.html");
});

//running port
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
