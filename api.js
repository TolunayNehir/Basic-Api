
var express = require("express");
var app = express();
var mysql = require('mysql');


 app.get('/posts/:id',(req,res)=>{
  adr=req.params['id'] // parameter example
  var sql = '';//query
  con.query(sql,function (err, result) {
    if (err)  console.log("error");
    res.send(result);
    res.end();
  });
  
 });

 var con = mysql.createConnection({
  host: "",//hostname
  user: "",//username
  password: ""//password
});

con.connect(function(err) {
  if (err)  console.log("Connection failed");
  console.log("Connected!");
});
 app.listen(3000);

