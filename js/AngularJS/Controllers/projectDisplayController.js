app.controller('projectDisplayController', function($scope, $http, projectService, $routeParams, $sce) {
var r = () => Math.random() * 200 >> 0;
var init = () => {
let projects = projectService.getProjectData();
$scope.project = {};
for(let i = 0; i < projects.length; i++){
  if(projects[i].id == $routeParams.id){
    $scope.project = projects[i];
    break;
  }
}

$scope.video = $sce.trustAsResourceUrl($scope.project.video);

var stacksize = $scope.project.stack.length;
$scope.tags = [];
for(let j = 0; j < stacksize; j++){
  var color = `rgba(${r()}, ${r()}, ${r()}, 0.75)`;
  var colorObj = {};
  colorObj["background-color"] = color;
  $scope.tags.push(colorObj);
}
}
$scope.back = () => {
    location.href="#!projects";
}
init();
})
