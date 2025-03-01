var http = require("http");
var fs = require("fs");
var path = require("path")

const server = http.createServer((req,res)=>{
  let filePath = path.join(__dirname,"static",req.url ==="/"?"index.html":req.url)
  let contentType = "text/html";
  let extName = path.extname(filePath)
  const mimeTypes = {
    ".html":"text/html",
    ".css":"text/css",
    ".js":"text/javascript",
    ".png":"image/png",
    ".jpg":"image/jpg",
    ".jpeg":"image/jpeg"
  }
  contentType = mimeTypes[extName]
  fs.readFile(filePath,function(err,content){
     if(err){
        fs.readFile(path.join(__dirname,"static","404.html"),function(error,content){
            res.writeHead(404,{"content-Type":"text/html"})
            res.end(content)
        }) 
     } else {
        res.writeHead(200,{"content-Type":contentType})
        res.end(content)
    }
  })
})

server.listen(8000,()=>{
    console.log("listening to 8000 port")
})