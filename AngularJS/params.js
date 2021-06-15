var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/sumurl/:a/:b', {
        templateUrl:'sumurl.html',
        controller:"sumurl"
    })
    .when('/suminput', {
        templateUrl:'suminput.html',
        controller:"suminput"
    })
    .when('/',{
        template: '<b>welcome to the App</b><i>click on the links</i>'
    })
    .otherwise({
        template:'<b>No content available</b><i>click on the links</i>'
    })
});

app.controller('sumurl', function($scope, $routeParams){
    $scope.a = $routeParams.a
    $scope.b = $routeParams.b
})

app.controller('suminput', function($scope, $interpolate){
    $scope.a = 0;
    $scope.b = 0;
    $scope.doSum=function($scope){
        var url=$interpolate('/sumurl/{{a}}/{{b}}')
    }
})