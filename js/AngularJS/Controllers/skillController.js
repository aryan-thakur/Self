app.controller('skillController', function($scope, $http) {
$scope.skills = [
  {id: "python", title: "Python", value: "50"},
  {id: "java", title: "JAVA", value: "85"},
  {id: "c", title: "C", value: "85"},
  {id: "cpp", title: "C++", value: "30"},
  {id: "js", title: "JavaScript", value: "75"},
  {id: "htmlid", title: "HTML5", value: "99"},
  {id: "css3", title: "CSS3", value: "95"},
  {id: "angularjs", title: "AngularJS", value: "80"},
  {id: "php", title: "PHP", value: "75"},
  {id: "sql", title: "SQL", value: "90"},
  {id: "mipsassembly", title: "MIPS Assembly", value: "99"}
];
$scope.makeGauges = function(){
    setTimeout(function(){ $scope.drawGauges() }, 100);
}
$scope.drawGauges = function(){
  $scope.opts = {
    angle: 0.15, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.6, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    staticLabels: {
    font: "10px sans-serif",  // Specifies font
    labels: [25,50,75],  // Print labels at these values
    color: "#ffffff",  // Optional: Label text color
    fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  }
  };
  for(let i = 0; i < $scope.skills.length; i++){
    $scope.target = document.getElementById($scope.skills[i].id); // your canvas element
    if(!$scope.target){
      alert("Graphics failed to render! Please contact me and report this!");
    }
    $scope.gauge = new Gauge($scope.target).setOptions($scope.opts); // create sexy gauge!
    $scope.gauge.maxValue = 100; // set max gauge value
    $scope.gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    $scope.gauge.animationSpeed = 64; // set animation speed (32 is default value)
    $scope.gauge.set($scope.skills[i].value); // set actual value
    }
}
})
