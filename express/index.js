var express = require("express");
var userRouter = require("./Routes/userRouter")
var adminRouter = require("./Routes/adminRouter")
// // var fs= require("fs")
// var path = require("path")
var app = express()
app.use("/auth",userRouter)
app.use("/admin",adminRouter)
// // var data =fs.readFileSync("./public/index.html","utf-8")
// var staticPath = path.join(__dirname,"public")
// app.use(express.static(staticPath))
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(staticPath,"index.html"))
//  })
 
// app.get("/about",(req,res)=>{
//   res.sendFile(path.join(staticPath,"about.html"))
// })
// app.get("/contact",(req,res)=>{
//     res.sendFile(path.join(staticPath,"contact.html"))
// })
app.listen(4000,()=>{
    console.log("listening to port 4000")
})