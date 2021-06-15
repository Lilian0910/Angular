function AppCtrl($scope, $http){
    console.log("Hello from Controller")
    
    //send request to server, and get res back, it will do scope
    //$http.get('url',请求配置的参数如{params:{id:5}},实际路径是url?id=5)
    var refresh = function(){
        $http.get('http://localhost:9000/contactlist/').success(function(response){
            // console.log("I got the data", response)
            $scope.contactlist = response;
            $scope.contact = ""
        });
    }
    //$http.post('url',请求发送的数据,请求配置的参数)
    refresh();
    $scope.addContact = function(){
        console.log($scope.contact)
        $http.post('http://localhost:9000/contactlist/', $scope.contact).success(function(response){
            console.log(response)
            refresh();
        })
    }

    $scope.remove = function(id){
        console.log(id);
        $http.delete('/contactlist/'+id).success(function(response){
            refresh();
        });
    }

    $scope.edit = function(id){
        console.log(id);
        $http.get('/contactlist/'+id).success(function(response){
            $scope.contact = response;
        });
    }
    $scope.update = function(){
        console.log($scope.contact._id);
        $http.put('/contactlist/'+$scope.contact._id, $scope.contact).success(function(response){
            refresh();
        });

    }





}