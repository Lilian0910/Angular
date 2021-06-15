 var app = angular.module('app',[])
app.controller('msg', function($scope){

});

app.directive('message', function($interpolate){
    return{
        compile: function(tElement, tAttributes){
            tElement.css("border","1px solid black");
            console.log(tAttributes.text + '--In Compile')

            return {
                pre:function(scope, iElement, iAttributes){
                    console.log(iAttributes.text + '--In Pre')
                },
                post:function(scope, iElement, iAttributes){
                    console.log(iAttributes.text + '--In Post')
                    //遇到3边框变红
                    if(iAttributes.text === "3"){
                        iElement.css("border","1px solid red");
                    }
                    iElement.on("click", scope.btnClick)
                }
            }
        },
        controller: function($scope, $element, $attrs){
            var v = $interpolate($attrs.text)($scope)
            console.log(v + '--In Controller')
            $scope.btnClick = function(){
                alert(v)
            }
        }
    }
})
