
//template url
var app = angular.module("app", []);
app.controller("emp", ['$scope', function($scope){
    $scope.msg="this is message using $scope"
}])
app.directive("myInfoMsg", function(){
    return{
        templateUrl:"my-info-msg.html"
    }
    $scopre.emp=emp;
})

// //use directive
// //[]==>shows the dependency
// var app = angular.module("app", []);
// app.controller("emp", ['$scope', function($scope){
//     $scope.msg="this is message using $scope"
// }])
// app.directive("myInfoMsg", function(){
//     return{
//         template:"<b>{{msg}}</b>"
//     }
//     $scopre.emp=emp;
// })

// var app = angular.module("app", []);
// app.controller("emp", function($scope){})
// app.directive("myInfoMsg", function(){
//     return{
//         template:"<b> this is a message</b>"
//     }
//     $scopre.emp=emp;
// })