const express =  require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const appliedOppurtunity = require("../models/Applied");
const userModel =  require("../models/user");
const authentication = require("../middlewares/authentication");
userRouter.post("/signup",async (req,res)=>{
    const {username,email,password} =  req.body;
    const user = await userModel.findOne({email});
    if(user){
        return res.json({error:"email already registered",message:"User already exists"})
    }
    const hashedPass = await bcrypt.hash(password,10);
    const newUser = new userModel({username,email,password:hashedPass});
    await newUser.save();
    res.status(201).json({status:true,message:"User created successfully"})
})
userRouter.post("/login",async(req,res)=>{
    const {email,password} =  req.body;
    const user = await userModel.findOne({email});
    if(!user){
        return res.status(400).json({status:false,message:"User does not exist"})
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({status:false,message:"Invalid credentials"})
    }
    const token = jwt.sign({email:user.email},"jwtkey",{expiresIn:"4h"})
    res.cookie("token",token)
    res.status(200).json({status:true,message:"User logged in successfully",token})
})

userRouter.post("/apply",authentication,async(req,res)=>{
 try {
    const {oppurtunity}  = req.body;
    const newAppliesOppurtunity = new appliedOppurtunity({
        userId:req.user.email,
        id:oppurtunity.id,
        profile_name:oppurtunity.profile_name,
        company_name:oppurtunity.company_name,
        duration:oppurtunity.duration
    })
    await newAppliesOppurtunity.save();
    res.status(201).json({status:true,message:"Oppurtunity applied successfully"})
 } catch (error) {
    return res.status(500).json({status:false,message:"internal server error"})
 }
})

userRouter.get("/applied",authentication,async(req,res)=>{
    try {
        const appliedOppurtunities = await appliedOppurtunity.find({userId:req.user.email});
        return res.json(appliedOppurtunities)
    } catch (error) {
        return res.status(400).json({status:false,message:"bad request"})
    }
})

userRouter.get("/verify",authentication,async(req,res)=>{
    try {
        if(!req.user){
            return res.status(401).json({status:false,message:"User not authorized"})
        }
        return res.status(200).json({status:true,message:"User Authenticated"})
    } catch (error) {
        return res.status(400).json({status:false,message:"bad request"})
    }
})

userRouter.get("/logout",(req,res)=>{
    res.clearCookie("token")
    return res.json({status:true,message:"Logged out successfully"})
})
module.exports = userRouter;