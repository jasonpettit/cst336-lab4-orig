// JavaScript File
const express = require("express");
const app = express();

//routes
app.get("/", function(req, res){
    res.send("it works!");
});

//server listner
app.listen("8080", "127.0.0.1", function(){
    console.log("Express Server is Running...");
});
