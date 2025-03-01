var express = require("express");
var studentArray = require("./initialData")
var app = express();
let currentId = studentArray.length;
console.log(currentId)
app.use(express.json())
app.get("/api/students",(req,res)=>{
    res.send(studentArray)
})
app.get("/api/students/:id",(req,res)=>{
    let id = req.params.id;
    if(isNaN(id)){
        return res.sendStatus(400)
    } else {
        id = parseInt(id)
        let obj = studentArray.find((item)=>{
            return item.id === id
         })
         if(obj === undefined){
             res.sendStatus(404)
         }
         res.send(obj)
    }
});
app.post("/api/students",(req,res)=>{
    let data = req.body;
    let keys = Object.keys(data)
//     if(keys.includes("name")  && keys.includes("currentClass")  && keys.includes("division")){
//         currentId++;
//         studentArray.push({id:currentId,name:data.name,currentClass:data.currentClass,division:data.division})
//    return res.send(studentArray)
//     } else {
//         return res.sendStatus(400)
//     }
    if(keys.find((item)=> item ==="name")  && keys.find((item)=> item ==="currentClass")  && keys.find((item)=> item ==="division")){
        currentId++;
        studentArray.push({id:currentId,name:data.name,currentClass:data.currentClass,division:data.division})
   return res.send(studentArray)
    } else {
        return res.sendStatus(400)
    }

})
app.put("/api/students/:id",(req,res)=>{
  let id = req.params.id;
  let oldObj = studentArray.find((item)=>{
    return item.id == id
  })
  if(oldObj === undefined){
    res.sendStatus(404)
  }
  let data = req.body;
 let newObj = {...oldObj,...data}
 let index = studentArray.indexOf(oldObj)
 studentArray[index] = newObj;
  res.send(studentArray)
})
app.delete("/api/students/:id",(req,res)=>{
    let id = req.params.id;
    let oldObj = studentArray.find((item)=>{
      return item.id == id
    })
    if(oldObj === undefined){
      res.sendStatus(404)
    }
   let index = studentArray.indexOf(oldObj);
   studentArray.splice(index,1)
    res.send(studentArray)
  })
app.listen(8000,()=>{
    console.log("listening to port 8000")
})