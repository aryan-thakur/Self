app.controller('projectController', function($scope, $http, projectService) {
var init = () => {
$scope.scratchprojects = projectService.getProjectData();
}
$scope.navigate = (id) => {
    let path = "#!project/"+id;
    location.href= path;
    console.log(path);
}
init();
})
