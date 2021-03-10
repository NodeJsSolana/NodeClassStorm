var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send("Hello you are wellcome to visit my website")
});


app.listen(3000, ()=> {
    console.log("I am listening on port 3000")
});

app.get('/usr', (req,res)=>{
    res.send({name:"eris",age:"16"})
});