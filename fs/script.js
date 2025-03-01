var fs = require("fs");
console.log("1")
fs.readFile("adfar.txt","utf-8",function(err,data){
   if(err){
    console.log(err)
   } else {
    console.log(data)
   }
})
fs.writeFile("verse.txt","Adfar Rasheed",function(){
    
})
console.log("3")