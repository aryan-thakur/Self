app.controller('indexController', function($scope, $http) {
  $scope.homeStyle = {'background-color': "#a9a9a9"};
  $scope.skillsStyle = {'background-color': "#5c5470"};
  $scope.projectsStyle = {'background-color': "#5c5470"};
  $scope.newsboardStyle = {'background-color': "#5c5470"};
  $scope.navigate = function(value){
    if(value == 0){
      $scope.homeStyle = {'background-color': "#a9a9a9"};
      $scope.skillsStyle = {'background-color': "#5c5470"};
      $scope.projectsStyle = {'background-color': "#5c5470"};
      $scope.newsboardStyle = {'background-color': "#5c5470"};
    }
    else if(value == 1){
      $scope.homeStyle = {'background-color': "#5c5470"};
      $scope.skillsStyle = {'background-color': "#a9a9a9"};
      $scope.projectsStyle = {'background-color': "#5c5470"};
      $scope.newsboardStyle = {'background-color': "#5c5470"};
    }
    else if(value == 2){
      $scope.homeStyle = {'background-color': "#5c5470"};
      $scope.skillsStyle = {'background-color': "#5c5470"};
      $scope.projectsStyle = {'background-color': "#a9a9a9"};
      $scope.newsboardStyle = {'background-color': "#5c5470"};
    }
    else{
      $scope.homeStyle = {'background-color': "#5c5470"};
      $scope.skillsStyle = {'background-color': "#5c5470"};
      $scope.projectsStyle = {'background-color': "#5c5470"};
      $scope.newsboardStyle = {'background-color': "#a9a9a9"};
    }
  }
});
