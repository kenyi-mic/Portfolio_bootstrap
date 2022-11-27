const express = require("express");
const port = 3000;

const app = express();

app.use("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`listening on port${port}`);
});
