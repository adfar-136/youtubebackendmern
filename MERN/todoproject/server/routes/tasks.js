const express = require("express");
const Task = require("../models/Task")
const router = express.Router();

router.get("/",async(req,res)=>{
    try {
        const tasks =await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({message:"Task reading failed"})
    }
})
router.post("/",async(req,res)=>{
    const {title,description,dueDate,priority} = req.body;
    const newTask = new Task({
        title:title,
        description:description,
        dueDate:dueDate,
        priority:priority
    })
    try {
      const savedTask = await newTask.save();
      res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({message:"task creation failed"})
    }
})
router.put("/:id",async(req,res)=>{
    const {id} = req.params;
    const {title,description,completed,dueDate,priority} = req.body;
    try {
        const updateTask = await Task.findByIdAndUpdate(
            id,
            {title,description,completed,dueDate,priority},
            {new:true}
        )
        if(!updateTask){
            return res.status(404).json({message:"Task not found"})
        }
        res.status(200).json(updateTask);
    } catch(err){
        res.status(400).json({message:"task updataion failed"})
      
    }
})
router.delete("/:id",async(req,res)=>{
    const {id} = req.params;
    try {
        const deleteTask = await Task.findByIdAndDelete(id)
        if(!deleteTask){
            return res.status(404).json({message:"Task not found"})
        }
        res.status(200).json({message:"Task deleted successfully"})
    } catch (error) {
        res.status(400).json({message:"task deletion failed"})
        
    }
})
module.exports = router