const express = require("express");
const port = 3000;

const app = express();

//server
app.use("/", (req, res) => {
  res.send("hello world!");
});

//running port
app.listen(port, () => {
  console.log(`listening on port${port}`);
});
