import { Permission, Role, RolePermission, UserRoles } from "../models/index.js";

export default async function fetchRolesAndPermissions(req){
    
 const userRoles = await UserRoles.find({
    userId:req.user._id
 })

let roles= {};
(await Role.find({
    _id: { $in : userRoles.map(({roleId})=>roleId)}
})).forEach(({role})=>{
    roles[role] =true
})
let permissions = {};

 const rolePermissions = await RolePermission.find({
    roleId :{ $in : userRoles.map(({roleId})=>roleId)}
 })
 var a = rolePermissions.map(({permissionId})=>permissionId)
//  console.log(a)
//  console.log(rolePermissions)
 var s = await Permission.findById("67c2a4839e87c179caefb3f3");
 console.log("hello", s)
 if(rolePermissions.length){
    (await Permission.find({
        _id: { $in: rolePermissions.map(({
        permissionId }) => permissionId) }
        })).forEach(({
        action,
        subject
     })=>{
        console.log(action)
       if(!permissions[subject]){
        permissions[subject] = {}
        permissions[subject][action] = true 
       } else {
        permissions[subject][action] = true
       }
     })
 }
 return {roles,permissions}
}