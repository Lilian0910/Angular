//SCOPING
//var , let , const
 function fn(){
     var a = "LOL"
     let b = "Hi"
     console.log(a, " ", b)
     {
        c = "horse"
        let d = "apple"
        console.log(c, " ", d)
     }

     console.log(c)
     // console.log(d) not defined
 }
 fn();

// console.log('Outside:'+c)

// var funcs = []
// for (var i=0; i<3;i++) {
//     funcs[i] = function(){
//         console.log("My Value: "+i)
//     };
// }

// for(var j=0;j<3;j++){
//     funcs[j]()
// }

//HOISTING
//var can be hoisted
//let cannot be hoisted


// (function fn(){
//     // var a;  // var can be hoisted
//     // let a; //let cannot be hoisted

//     console.log(a) //undefined
//     let a = 99
//     console.log(a)

// })();


//REDECLERATION
// var a = 44;
// var a = 99;

// console.log(a)

// const PI = 23;
// console.log(PI)



