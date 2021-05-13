app.controller('projectController', function($scope, $http) {
$scope.scratchprojects = [
  {name: "Modelo", src: ["./Images/angularjs_icon.png", "./Images/php_icon.svg", "./Images/css_icon.svg", "./Images/javascript_icon.svg"], solo: "solo"},
  {name: "MIPS Game", src: ["./Images/assembly_icon.svg", "", "", ""], solo: "solo"},
  {name: "Social Media for Seniors", src: ["./Images/justinmind_icon.png", "", "./Images/balsamiq_icon.png", ""], solo: "group"},
  {name: "Linux Shell", src: ["./Images/java_icon.svg", "", "", ""], solo: "group"}
];

$scope.existingprojects = [
  {name: "Pintos", src: ["./Images/c_icon.svg", "", "./Images/docker_icon.svg", ""], solo: "group"},
  {name: "BlueBoard", src: ["./Images/angularjs_icon.png", "./Images/typescript_icon.svg", "./Images/html_icon.svg", "./Images/sass_icon.svg"], solo: "group"}
];
})
