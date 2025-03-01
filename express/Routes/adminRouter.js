var express = require("express");
var adminRouter = express.Router()


adminRouter.get("/dashboard",(req,res)=>{
    res.send("Dashboard access")
})
adminRouter.get("/dashboard/:userid",(req,res)=>{
    var userid = req.params.userid;
    console.log(userid)
   res.send(userid)
})
module.exports = adminRouter