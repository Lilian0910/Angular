var app = angular.module('app',[])
app.controller('ref', function($scope){
    $scope.a=1;
    $scope.b=2;
    $scope.c=3;

    $scope.updateC= function(){
        $scope.c=$scope.a*4;
    }
    
    $scope.$watchGroup(["a","b"], function(newval, oldval){
        if(newval != oldval){ 
            $scope.c=$scope.a*$scope.b;
            console.log($scope.c)
        }
    })

    // //check if there's a real change
    // $scope.$watch("c", function(newval, oldval){
    //     if(newval != oldval){ 
    //         console.log("update c to "+newval)
    //     }
    // })
    // $scope.$watch("b", function(newval, oldval){
    //     if(newval != oldval){ 
    //         $scope.c=$scopeb*2;
    //     }
    // })
    // $scope.$watch("a", function(newval, oldval){
    //     if(newval != oldval){ 
    //         $scope.b=$scope.a*10;
    //     }
    // })

});

//reference watcher only check whether o will change totally
//but we only want to check whether obj in o changed
app.controller('equal', function($scope){
    $scope.o={
        a:1, b:2, c:3
    }
    $scope.$watch("o", function(newV, oldV){
        if(newV != oldV){ 
            $scope.o.c=$scope.o.a*$scope.o.b;
        }
    }, true) //change reference watcher to equality wather

    $scope.$watchGroup(["o.a","o.b"], function(newV, oldV){
        if(newV != oldV){ 
            $scope.o.c=$scope.o.a*$scope.o.b;
        }
    }, true)
});


//collection wather
app.controller('collect', function($scope){
    $scope.emps=[
        {empno:"1001", ename:"john"},
        {empno:"1002", ename:"jack"},
        {empno:"1003", ename:"rose"},
        {empno:"1004", ename:"will"},
        {empno:"1005", ename:"shawn"},
    ]
    $scope.addEmp=function(){
        var newEmpNo= 1000+$scope.emps.length+1;
        var newEname="ename"+newEmpNo;

        $scope.emps.push({empno:newEmpNo, ename:newEname})
  }
  $scope.modify3rdEmp = function(){
      $scope.emps[2].ename = "Test"
  }
  $scope.$watchCollection('emps', function(newval, oldval){
      console.log("No of employees: "+$scope.emps.length)
  })
})

//rootScope
app.controller('root', function($scope,$rootScope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;

    $scope.$watch('a', function(newV, oldV){
        if(newV != oldV)
            console.log('a modified to '+newV)
    })
    $scope.$watch('b', function(newV, oldV){
        if(newV != oldV)
            console.log('b modified to '+newV)
    })
    $scope.$watch('c', function(newV, oldV){
        if(newV != oldV){
            console.log('c modified to '+newV)
            if($scope.c>50){
                $scope.a=1000
            }
        }   
    })

    $rootScope.$watch(function(){
        console.log('--digest iteration started---')
    })
});