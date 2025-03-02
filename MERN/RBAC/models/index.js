import permissionSchema from "./permission/index.js"
import userSchema from "./user/index.js"
import roleSchema from "./role/index.js"
import rolePermissionSchema from "./rolePermission/index.js";
import userRoleSchema from "./userRoles/index.js";
import songSchema from "./songs/index.js"
import { model } from "mongoose"

export const User = model("User",userSchema)

export const Role = model("Role",roleSchema)
export const Permission = model("Permission",permissionSchema)
export const RolePermission = model("RolePermission",rolePermissionSchema)
export const Song = model("Song",songSchema)
export const UserRoles = model("UserRoles",userRoleSchema)
