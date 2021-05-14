app.controller('projectController', function($scope, $http) {
$scope.scratchprojects = [
  {id: 1, name: "Modelo", src: ["./Images/angularjs_icon.png", "./Images/php_icon.svg", "./Images/css_icon.svg", "./Images/javascript_icon.svg"], solo: "solo"},
  {id: 2, name: "MIPS Game", src: ["./Images/assembly_icon.svg", "", "", ""], solo: "solo"},
  {id: 3, name: "Social Media for Seniors", src: ["./Images/justinmind_icon.svg", "", "./Images/balsamiq_icon.png", ""], solo: "group"},
  {id: 4, name: "Linux Shell", src: ["./Images/java_icon.svg", "", "", ""], solo: "group"}
];

$scope.existingprojects = [
  {id: 5, name: "Pintos", src: ["./Images/c_icon.svg", "", "./Images/docker_icon.svg", ""], solo: "group"},
  {id: 6, name: "BlueBoard", src: ["./Images/angularjs_icon.png", "./Images/typescript_icon.svg", "./Images/html_icon.svg", "./Images/sass_icon.svg"], solo: "group"}
];

$scope.navigate = function(id){
  location.href = "#!/project/"+id;
}
})
