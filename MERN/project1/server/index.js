var express = require("express");
var mongoose = require("mongoose");
const User = require("./model/User")
var app = express();
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/register").then(()=>{
    console.log("connected to mongodb")
})
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to express app</h1>")
})
app.post ("/signup",(req,res)=>{
    let data = req.body;
    let newUser = new User({
        username:data.username,
        email:data.email,
        password:data.password
    })
    newUser.save()
    res.json("User Registered successfully")
})
app.post("/login",async (req,res)=>{
    let data = req.body;
    const user =await User.findOne({email:data.email});
    console.log(user)
    if(!user){
        res.json({message:"User does not exist please signup"})
    }
    if(user.password === data.password){
        res.json({message:"userlogged in"})
    } else{
        res.json({message:"wrong password"})

    }


})
app.listen(4000,()=>{
    console.log("listening to port 4000")
})