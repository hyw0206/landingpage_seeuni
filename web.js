const express = require("express");
const app = express();
const path = require("path");
const PORT = 8001;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/faq", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/curriculum", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});