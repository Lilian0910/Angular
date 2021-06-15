var myApp = angular
                  .module("myModule", [])
                  .controller("myController", function($scope){
                      var country = {
                          name:'USA',
                          capital:"Washington DC",
                          flag:"E:/Personal Files/Marlabs/Java UI/Program Files/APRJAVA/AngularJS/images/flag.jpg"
                      }

                      var employees = [
                        { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
                        { firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000 },
                        { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000 },
                        { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000 },
                        { firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000 }
                    ];

                    var technologies = [
                        {name:"Kotlin", likes:0, dislikes:0},
                        {name:"React", likes:0, dislikes:0},
                        {name:"Angular", likes:0, dislikes:0},
                        {name:"VueJS", likes:0, dislikes:0},
                        {name:"Swift", likes:0, dislikes:0},
                        {name:"Hibernate", likes:0, dislikes:0},
                        {name:"Spring", likes:0, dislikes:0},
                    ] 

                    var emps = [
                        { name: "Ben", gender: "Male", city: "London", salary: 55000 },
                        { name: "Sara", gender: "Female", city: "Chennai", salary: 68000 },
                        { name: "Mark", gender: "Male", city: "Chicago", salary: 57000 },
                        { name: "Pam", gender: "Female", city: "London", salary: 53000 },
                        { name: "Todd", gender: "Male", city: "Chennai", salary: 60000 }
                    ];

                      $scope.country = country;
                      $scope.name = "Will"
                      $scope.employees = employees
                      $scope.technologies = technologies
                      $scope.emps=emps;

                      $scope.increamentLikes=function(technologies){
                          technologies.likes++;
                      }
                      $scope.increamentDislikes=function(technologies){
                        technologies.dislikes++;
                    }
                  })
