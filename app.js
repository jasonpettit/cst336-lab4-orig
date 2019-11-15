// JavaScript File
const express = require("express");
const app = express();
app.engine('html',require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/mercury", function(req, res){
    res.render("mercury.html");
});

app.get("/venus", function(req, res){
    res.render("venus.html");
});

//server listner
app.listen("8080", "127.0.0.1", function(){
    console.log("Express Server is Running...");
});