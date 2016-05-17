'use strict';
app.directive('pdfjs', ['$window', function($window) {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      pdfPath: '=pdfPath'
    },
    link: function(scope, element, attrs) {
      simpleViewer(attrs.pdfpath);
    },
    templateUrl: 'simpleviewer.html'
  };
}]);
