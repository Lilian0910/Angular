//1. new Promise()--> state=pending
//2. resolved--> state=fullfilled
//3. rejected--> state=rejected

let promise=new Promise(function(resolve, reject){
    //setTimeout(()=>resolve("done"),1000)
    reject(new Error("Rejected"))
})

//get the value use ".then"
promise
.then(
    (result)=>console.log(result),
    //(error)=>console.log(error.message)
    )
.catch(
    (error)=>console.log("Error: ",error)
    )
.finally(
    ()=>console.log("Always Runs")
)