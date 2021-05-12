app.directive('projectBlock', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: './projectBlock.html'
  };
});
