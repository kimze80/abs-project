var express = require("express");
var app = express();

app.use(express.static("./src"));

module.exports = app;
