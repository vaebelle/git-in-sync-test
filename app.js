const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Git in Sync!");
});

app.get("/ror", (req, res) => {
  res.send("dino");
});

const server = app.listen(8080, () => {
  console.log("Listening to port 8080.");
});

module.exports = server;

