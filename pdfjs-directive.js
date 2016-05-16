'use strict';
app.directive('pdfjs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    templateUrl: 'simpleviewer.html'
  };
});
