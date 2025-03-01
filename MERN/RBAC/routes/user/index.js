import  express  from 'express';
import { Role, UserRoles } from '../../models/index.js';

const router = express.Router()

router.post("/upgrade",async (req,res)=>{
    try {
        const {_id :roleId} = await Role.findOne({role:"Premium"})
        const userRole = new UserRoles({
            userId:req.user._id,
            roleId:roleId
        })
        await userRole.save()
        res.status(200).json({message:"role updated to premium"})
    } catch (error) {
        res.status(400).json({message:"bad request"})
        
    }
})

export default router
