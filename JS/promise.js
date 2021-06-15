function doubleAfter2Secods(x){
    return new Promise(resolve =>{
        setTimeout(()=>{resolve(x*2)}, 2000)
    })
}
// doubleAfter2Secods(10).then(r => {console.log(r)})
// let sum = doubleAfter2Secods(10).then(r=> r) + doubleAfter2Secods(20).then(r=> r) + doubleAfter2Secods(30).then(r=> r)
// console.log(sum)

/*this is a call back function*/
function addPromise(){
    return new Promise(resolve => {
        doubleAfter2Secods(10).then(a => {
            doubleAfter2Secods(20).then(b => {
                doubleAfter2Secods(30).then(c => {
                    resolve(a+b+c)
                })
            })
        })
    })
}
addPromise().then(r => console.log(r))
/*this is a call back function*/

//async await

async function addAsync(){
    const a = await doubleAfter2Secods(10)
    const b = await doubleAfter2Secods(20)
    const c = await doubleAfter2Secods(30)
    return a+b+c
} //run within 10 sec 

addAsync().then(sum=>{console.log(sum)})

//request promise