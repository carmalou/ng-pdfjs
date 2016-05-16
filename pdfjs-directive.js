'use strict';
app.directive('pdfjs', function() {
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
      }
    },
    templateUrl: 'simpleviewer.html'
  };
});
