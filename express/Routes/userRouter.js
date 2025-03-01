var express = require("express")
var userRouter = express.Router()


userRouter.get("/user",(req,res)=>{
    res.send("user is Adfar")
})

userRouter.get("/details",(req,res)=>{
    res.send("user details")
})

module.exports = userRouter;