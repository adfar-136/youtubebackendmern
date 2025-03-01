// console.log("1")
// setTimeout(function(){
//     console.log("2")
// },2000)
// console.log("3")


// const promise = new Promise(function(resolve,reject){
//    var a = false;
//    if(a){
//     resolve("user")
//    } else {
//     reject("error")
//    }
// }) 

// promise.then(function(result){
//     console.log(result)
// }).catch(function(err){
//     console.log(err)
// })


// let data = fetch("https://official-joke-api.appspot.com/random_joke")
// data.then(function(result){
//     return result.json()
// }).then(function(response){
//     console.log(response)
// })

let data = fetch("https://api.coinlore.net/api/tickers/");
data.then(function (result){
    return result.json()
}).then(function(x){
    console.log(x)
}).catch(function(err){
    console.log(err)
})