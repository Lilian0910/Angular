//module
var myapp = angular.module('myModule',[]);

///connect the module with the controller
//当你在 AngularJS 创建控制器时，你可以将 $scope 对象当作一个参数传递

myapp.controller("myController", function($scope){
    var employee={
        firstName:"John",
        lastName:"Wick",
        dept:"Sales"
    }
    $scope.employee = employee;
})
myapp.controller("myController1", function($scope){
    $scope.message = "Second Controller";
})


