var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testdb").then(()=>{
    console.log("connect to mongodb")
})

const student =new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
const Students = new mongoose.model("Students",student)

const adder = ()=>{
//   Students.create({
//     name:"Adfar",
//     email:"adfar@gmail.com",
//     age:28
//   })
const student1 = new Students({
        name:"Rohan",
        email:"rohan@gmail.com",
        age:28
})
student1.save()
}
adder()