function outer(a=1,b=2){
    var name="John Wick";

    function inner(c=3,d=4){
        var innerName = "Spiderman"
        console.log(name,' ',a,' ',b)

        function innermost(){
            console.log(name,' ', innerName)
        }
        innermost()
    }
    inner()
}

outer();

//var result = outer();//outer fn ends, call stack is removed, memory is cleared

// setTimeout(result, 3000)

//result()

//capturing