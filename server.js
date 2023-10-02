var express=require('express');
var app=express();
app.use(express.static('public'));
app.get("/",(res,req)=>{res.setEncoding("Welcome to IET");});
app.listen(8000);
console.log("app is listening on port 8000");