app.directive('script', function() {
  return {
    restrict: 'E',
    scope: false,
    link: function(scope, elem, attr) {
      if (attr.type === 'text/javascript-lazy') {
        // console.log('elem', elem);
        //console.log('elem.text()', elem.text());
        // var scriptsToLoad = elem.text();
        // var scripts = JSON.parse(scriptsToLoad);
        // console.log('scriptsToLoad', scriptsToLoad);
        // console.log('scripts', scripts);
        var code = elem.text();
        var f = new Function(code);
        f();

        // console.log('elem', elem);
        // angularLoad.loadScript(elem[0].src).then(function() {
        //   console.log('succesfully loaded :)');
        //     // Script loaded succesfully.
        //     // We can now start using the functions from someplugin.js
        // }).catch(function() {
        //   console.log('unsuccessfully loaded :(');
        //     // There was some error loading the script. Meh
        // });
      }
    }
  };
});

// app.directive('loadScript', [function() {
//   return function(scope, element, attrs) {
//     angular.element('<script type="text/ng-template" src="node_modules/pdfjs-dist/web/compatibility.js"></script>' +
//                     '<script type="text/ng-template" src="node_modules/pdfjs-dist/build/pdf.js"></script>' +
//                     '<script type="text/ng-template" src="node_modules/pdfjs-dist/web/pdf_viewer.js"></script>' +
//                     '<script type="text/ng-template" src="simpleviewer.js"></script>'
//                   ).appendTo(element);
//   }
// }]);
