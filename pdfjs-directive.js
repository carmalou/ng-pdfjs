app.directive('pdfjs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      pdfPath: '=pdfPath'
    },
    link: function($scope, element, attrs) {
       simpleViewer(attrs.pdfpath);

      $scope.test = function() {
        console.log('test invoked');
      }

      $scope.previousPage = function () {
        console.log('can you see me');
          if (PAGE_TO_VIEW <= 1) {
            return;
          }
          PAGE_TO_VIEW = parseInt(PAGE_TO_VIEW) - 1;
          var pageNum = PAGE_TO_VIEW;
        };
      
      $scope.nextPage = function () {
        console.log('can you see me in nextPage');
          if (PAGE_TO_VIEW >= pdfViewer.pdfDocument.numPages) {
            return;
          }
          PAGE_TO_VIEW = parseInt(PAGE_TO_VIEW) + 1;
          var pageNum = PAGE_TO_VIEW;
        };
    },
    templateUrl: 'simpleviewer.html' // directive's scope will be shared here
  };
});
