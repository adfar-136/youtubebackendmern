import  express  from 'express';
import { Song } from '../../models/index.js';
import { canUserDownload, canUserLikeSong } from '../../middlewares/authorize.js';

const router = express.Router()

router.get("/",async(req,res)=>{
    try {
        const songs = await Song.find({})
        res.status(200).json({
            data:songs
        })
    } catch (error) {
        res.status(400).json({
            data:"Server Error"
        })
    }
})
router.post("/like",canUserLikeSong,async(req,res)=>{
    try {
        res.status(200).json({
            data:"Song Liked"
        })
    } catch (error) {
        res.status(400).json({
            data:"Server Error"
        })
    }
})

router.post("/download",canUserDownload,async(req,res)=>{
    try {
        res.status(200).json({
            data:"Song Downloaded"
        })
    } catch (error) {
        res.status(400).json({
            data:"Server Error"
        })
    }
})













export default router
