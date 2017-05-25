const express = require('express');
const app = express();


app.get("/",function(req,res){
  res.sendFile("/Users/adamsmith/Galvanize/Assignments/week08/express_server_3/public/index.html")
})

app.get("/api",function(req,res){
  res.send("Hello from api");
})

app.use(function(req,res){
  res.status(404)
})

app.listen(8000,function(){
  console.log("listening bitches on 8000");
});
