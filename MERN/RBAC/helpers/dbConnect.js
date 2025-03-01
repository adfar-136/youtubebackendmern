import mongoose from "mongoose" ;
import dotenv from "dotenv"

dotenv.config();
const uri = process.env.URI;
console.log(uri)
export default mongoose.connect(process.env.URI).then(()=>{
    console.log("Connected to DB")
})