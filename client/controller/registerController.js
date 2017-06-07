angular.module('myApp').controller('RegisterController',function($scope,$http){

$scope.SavePeople=function(){
  $http.post('/api/AddPeople',$scope.People).then(function(res){
    console.log('Data Posted to db');
  },function(err) {
    console.log(err);
  });
};


});
