let obj = {
    name: 'John',
    age: 30,
    salary:4000,
    saymyName : function (){
        console.log(this.name);
    }
}
console.log(obj.age)
console.log(obj["age"])
obj.saymyName()