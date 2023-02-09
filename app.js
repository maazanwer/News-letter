const fs =require('fs');
const express = require('express')
const app = express();
const favicon = require('serve-favicon')
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/image/favicon.ico'));

app.listen(process.env.PORT || 3000 , function(){
  console.log("Server is running")
})

app.get("/" , function(req,res){
  res.sendFile(__dirname + "/signup.html")})
