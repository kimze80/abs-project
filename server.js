var http = require("http");
// var express = require("express");
var app = require("./config/express");

http.createServer(app).listen(4000, function() {
  console.log("kimdim");
});
