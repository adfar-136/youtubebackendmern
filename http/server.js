var http = require("http")
var fs =require("fs")
var server =http.createServer(function(req,res){
 const file = fs.readFileSync("./static/index.html","utf-8")
 
  if(req.url === "/"){
    res.end(file)
  } else if(req.url === "/about"){
    res.end("<h1>ABout Page</h1>")
  } else if(req.url === "/contact"){
    res.end("<h1>Contact Page</h1>")
  } else {
    res.end("Error Page")
  }
})









// var server = http.createServer(function(req,res){
//     res.write("Welcome to my page");
//     res.write("Welcome to my page");
//     res.write("Welcome to my page");
//     res.write("Welcome to my page");
//     res.write("Welcome to my page");
//    res.end()
// })

server.listen(4000,function(){
   console.log("listening to port 4000")
})