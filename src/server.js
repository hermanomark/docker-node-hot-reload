const express = require('express');
const app = express();

app.get('/', (req,res)=>{
     res.send("Welcome to my amazing app! hot reload is working!"); 
 });

 app.get('/other', (req,res)=>{
     res.send("Other endpoint"); 
 });

app.listen(3000, function () {
    console.log("app listening on port 3000");
});