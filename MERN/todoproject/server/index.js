const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/tasks");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/todo").then(()=>{
    console.log("Connected to mongodb")
})
app.use("/tasks",router)
app.listen(8000,()=>{
    console.log("server is running on port 8000")
})