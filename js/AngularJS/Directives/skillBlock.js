app.directive('skillBlock', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: './skillBlock.html'
  };
});
