const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hasnat-Khalid");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at hasnat</h1>");
});

app.get("/youtube", (rep, res) => {
  res.send("<h2>Chai aur Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
