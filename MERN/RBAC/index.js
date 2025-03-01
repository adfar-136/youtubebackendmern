import express from "express";
// import dbConnect from "./helpers/dbConnect.js";
import router from "./routes/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const app = express();

app.use(express.json())
mongoose.connect(process.env.URI).then(()=>{
    console.log("Connected to DB")
})
app.use("/api",router)
app.listen(process.env.PORT,()=>{
    console.log("Listening to port 8000")
})