const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
const cors = require("cors")


const userRouter =  require("./routes/user")


const app = express()
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/auth",userRouter);
mongoose.connect("mongodb://localhost:27017/internshipportal").then(()=>{
    console.log("Connected to MongoDB");
})
app.listen(4000,()=>{
    console.log("listening to port 4000")
})