// var setRef1;
// setRef1=setTimeout(
//     ()=>console.log('Time Out'),3000
// )
// clearTimeout(setRef1)
// //setInternval
// var setRef2;
// setRef2=setInterval(
//     ()=>console.log('Time Out'),3000
// )
// clearInterval(setRef2)

var setRef3;
setRef3=setInterval(
    ()=>console.log(new Date().getSeconds()),1000
)
clearInterval(setRef3)
