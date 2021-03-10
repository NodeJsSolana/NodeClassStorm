var fs = require('fs');
//var data = fs.readFileSync('input.txt');
fs.readFile('input.txt', (err,data)=> {
    if(err) console.log("Input error");
    else console.log(data.toString())
});
console.log("program end");