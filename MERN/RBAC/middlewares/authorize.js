
import { Permission, RolePermission, UserRoles } from "../models/index.js"

export const canUserLikeSong =async (req,res,next)=>{
   const permission = await Permission.findOne({
    subject:"song",
    action:"like"
   })
   const userRoles = await UserRoles.find({
    userId:req.user._id
    })

    const rolePermission = await RolePermission.find({
    roleId :{$in :userRoles.map(({roleId})=>roleId)}
    })
   
    if(rolePermission.some((item)=> item.permissionId.equals(permission._id))){
        next()
    } else {
        res.status(401).json({message:"You are not authorized"})
    }
}
export const canUserDownload = async(req,res,next)=>{
    const permission = await Permission.findOne({
        subject:"song",
        action:"download"
       })
       const userRoles = await UserRoles.find({
        userId:req.user._id
        })
    
        const rolePermission = await RolePermission.find({
        roleId :{$in :userRoles.map(({roleId})=>roleId)}
        })
       
        if(rolePermission.some((item)=> item.permissionId.equals(permission._id))){
            next()
        } else {
            res.status(401).json({message:"You are not authorized"})
        }
}