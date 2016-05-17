'use strict';
app.directive('pdfjs', ['$window', function($window) {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      pdfPath: '=pdfPath'
    },
    link: function(scope, element, attrs) {
      console.log('link func');
      console.log('scope', scope);
      console.log('attrs', attrs);
      if(attrs.pdfpath) {
        console.log(attrs.pdfpath);
        $window.pdfpath = attrs.pdfpath;
        console.log('window.pdfpath', $window.pdfpath);
      }
      simpleViewer();
    },
    templateUrl: 'simpleviewer.html'
  };
}]);
