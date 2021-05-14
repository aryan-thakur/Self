app.controller('projectController', function($scope, $http) {
$scope.scratchprojects = [
  {name: "Modelo", src: ["./Images/angularjs_icon.png", "./Images/php_icon.svg", "./Images/css_icon.svg", "./Images/javascript_icon.svg"], solo: "solo", info: "A side project that enabled models and actors to create profiles and casting agencies to search and access these profiles in order to hire them. Auditions could be posted by agencies and models could view these and submit their takes too."},
  {name: "MIPS Game", src: ["./Images/assembly_icon.svg", "", "", ""], solo: "solo"},
  {name: "Social Media for Seniors", src: ["./Images/justinmind_icon.svg", "", "./Images/balsamiq_icon.png", ""], solo: "group"},
  {name: "Linux Shell", src: ["./Images/java_icon.svg", "", "", ""], solo: "group"}
];

$scope.existingprojects = [
  {name: "Pintos", src: ["./Images/c_icon.svg", "", "./Images/docker_icon.svg", ""], solo: "group"},
  {name: "BlueBoard", src: ["./Images/angularjs_icon.png", "./Images/typescript_icon.svg", "./Images/html_icon.svg", "./Images/sass_icon.svg"], solo: "group"}
];

$scope.showinfo = 0;
$scope.showicons = 1;

$scope.switch = function() {
  if($scope.showinfo){
    $scope.showinfo = 0;
    $scope.showicons = 1;
  }
  else{
    $scope.showinfo = 1;
    $scope.showicons = 0;
  }
}
})
