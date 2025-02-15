const express = require('express');
const moment = require('moment');
const app = express();

app.get('/', (req,res)=>{
    res.send("Weolcome to my amazing app! hot reload is working!"); 
});

app.get('/other', (req,res)=>{
    res.send("Other endpoint"); 
});

app.get('/moment', (req,res)=>{
     res.send(`Welcome! Current time is: ${moment().format('MMMM Do YYYY, h:mm:ss a')}`); 
});

app.listen(3000, function () {
    console.log("app listening on port 3000");
});