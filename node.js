/* var http = require("http")
const { listenerCount } = require("process")
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});  //status code is set to 200
    res.end('Hello World!');                            //we close the response, adding the content as an argument to end():
})
.listen(8080)

//creating modules
var add =require('./calc')
result = add.sum(2,3)
console.log(result) */

//filesystem module

//readfile
/* var fs =require('fs')
fs.readFile('calc.js',function (err,data){
    console.log(data)
}
)
 */
/////////////////////////////////////
///reading a json file
 var fs = require('fs')

fs.readFile("./names.json",(err,data)=>{
  if(err){
    console.log(err)
  }else{
    let obj= JSON.parse(data)
    console.log(obj[0].name)
  }
}) 
//create file
 //write file
var fs = require('fs');

///writing a json file
const object={
"name":"ranji",
"age":24
}

fs.writeFile("./newnames.json",JSON.stringify(object,null,2),(err)=>{
  
  if(err){
    console.log(err)
  }else{
    console.log("file succesfully written")
  }
})
/*
fs.writeFile('calc1.js', 'Hello content!', function (err) {  //it removes the content and add new content
  if (err) throw err;
  console.log('Saved!');
}); */
/* var fs = require('fs');

fs.appendFile('calc.js', 'Hello content!', function (err) { //itadds the contents to the last of the existing file
  if (err) throw err;
  console.log('Saved!');
}); */
/* var fs = require('fs');

fs.open('calc1.js', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
 */

//update file
//append and write

/* var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
}); */


//delete file

/* var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {          //deletes 
  if (err) throw err;
  console.log('File deleted!');
});
 */

//rename

/* var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); */


//express
/* const express = require('express')
const app = express()
app.get('/jasee', function (req, res) {
  const id = req.query.id
  res.send('hello world')
})


app.listen(9000,function(req,res){
  console.log("running...")
}); */

