var app = angular.module('app',[])

app.controller('emp', function($scope,$rootScope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.s = 0;

    $scope.calSum=function(){
        $scope.s=$scope.a+$scope.b;
    }
});

var btnClick = function(){
    var $scope = angular.element($("#div")).scope();
    //one way to apply scope
    // $scope.s = Number($scope.a) + Number($scope.b);
    // $scope.$apply();


    //another way
    $scope.$apply(function(){
        $scope.s = Number($scope.a) + Number($scope.b);
    })
}
