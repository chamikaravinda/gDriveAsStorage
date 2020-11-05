var express = require("express");
var routes = express();

routes.get("/", function (req, res) {
  res.send("Welcome to drive upload");
});

module.exports = routes;
