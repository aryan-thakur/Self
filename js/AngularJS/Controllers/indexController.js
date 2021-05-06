app.controller('indexController', function($scope, $http, $route) {
  $scope.downloadResume = function(){
    window.open("./Documents/aryanthakurresume.pdf", '_blank');
  }
  $scope.initfn = function(){
    var chapter = location.href.split('/')[location.href.split('/').length - 1];
    var value = 0;
    if(chapter == "skills"){
      value = 1;
    }
    else if(chapter == "projects"){
      value = 2;
    }
    else if(chapter == "newsboard"){
      value = 3;
    }
    $scope.navigate(value,0);
  }
  $scope.navigate = function(redirect, val){
    if(redirect == 0){
      $scope.homeStyle = {'background-color': "#a9a9a9"};
      $scope.skillsStyle = {'background-color': "#5c5470"};
      $scope.projectsStyle = {'background-color': "#5c5470"};
      $scope.newsboardStyle = {'background-color': "#5c5470"};
      if(val){
      location.href = "#!";}
    }
    else if(redirect == 1){
      $scope.homeStyle = {'background-color': "#5c5470"};
      $scope.skillsStyle = {'background-color': "#a9a9a9"};
      $scope.projectsStyle = {'background-color': "#5c5470"};
      $scope.newsboardStyle = {'background-color': "#5c5470"};
        if(val){
      location.href = "#!skills";}
    }
    else if(redirect == 2){
      $scope.homeStyle = {'background-color': "#5c5470"};
      $scope.skillsStyle = {'background-color': "#5c5470"};
      $scope.projectsStyle = {'background-color': "#a9a9a9"};
      $scope.newsboardStyle = {'background-color': "#5c5470"};
      if(val){
      location.href = "#!projects";}
    }
    else{
      $scope.homeStyle = {'background-color': "#5c5470"};
      $scope.skillsStyle = {'background-color': "#5c5470"};
      $scope.projectsStyle = {'background-color': "#5c5470"};
      $scope.newsboardStyle = {'background-color': "#a9a9a9"};
        if(val){
      location.href = "#!newsboard";}
    }
  }
});
