import  express  from 'express';
import bcrypt from "bcryptjs"
import { Role, User, UserRoles } from '../../models/index.js';
import jwt from 'jsonwebtoken';
import authentication from '../../middlewares/authentication.js';
import fetchRolesAndPermissions from '../../helpers/fetchUserRolesAndPermissions.js';
const router = express.Router()

router.post("/register",async(req,res)=>{
    const {username,password} = req.body;
    try {
        const hashPassword = await bcrypt.hash(password,10)
        const newUser = new User({username,password:hashPassword})
       const {_id:userId} = await newUser.save();
     const {_id:roleId} =  await Role.findOne({role :"Standard"});
     const a = await UserRoles({
        userId:userId,
        roleId:roleId
     }).save()
    res.status(201).json({message:"User Created Successfully",a})
    } catch (error) {
    res.status(400).json({message:"Bad Request"})
        
    }
})

router.post("/login",async(req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user) {
        res.status(404).json({message:"User Not found"})
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
       res.status(401).json({message:"Invalid credentials"})
    }
    req.user = {
        _id:user._id
    }
    const token = jwt.sign({userId :user._id,username:user.username},process.env.JWT_SECRET,{expiresIn:"3h"});
    var data = await fetchRolesAndPermissions(req)
    res.status(200).json({message:"User Logged In",data,token})

})

router.get("/",authentication,async(req,res)=>{
    res.send(req.user)
})
export default router
