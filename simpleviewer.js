'use strict';

function simpleViewer(pdfpath) {
  testForPDFJS();

  var DEFAULT_URL = pdfpath;
  var SEARCH_FOR = '';
  var PAGE_TO_VIEW = 1;
  var SCALE = 1.0;

  // generate elements for viewer
  var parentViewer = document.createElement('div');
  parentViewer.setAttribute('id', 'viewerContainer');
  document.body.appendChild(parentViewer);

  var childViewer = document.createElement('div');
  childViewer.setAttribute('id', 'viewer');
  childViewer.setAttribute('class', 'pdfViewer');

  parentViewer.appendChild(childViewer);

  PDFJS.workerSrc = 'node_modules/pdfjs-dist/build/pdf.worker.js';

  var container = document.getElementById('viewerContainer');

  // (Optionally) enable hyperlinks within PDF files.
  var pdfLinkService = new PDFJS.PDFLinkService();

  // generate and create viewer
  var pdfViewer = new PDFJS.PDFViewer({
    container: container,
    linkService: pdfLinkService,
  });
  pdfLinkService.setViewer(pdfViewer);

  // (Optionally) enable find controller.
  var pdfFindController = new PDFJS.PDFFindController({
    pdfViewer: pdfViewer
  });
  pdfViewer.setFindController(pdfFindController);

  container.addEventListener('pagesinit', function () {
    // We can use pdfViewer now, e.g. let's change default scale.
    pdfViewer.currentScaleValue = 'page-width';

    if (SEARCH_FOR) { // We can try search for things
      pdfFindController.executeCommand('find', {query: SEARCH_FOR});
    }
  });

  // Loading document.
  function getDocument() {
    PDFJS.getDocument(DEFAULT_URL).then(function (pdfDocument) {
      pdfViewer.setDocument(pdfDocument);
      pdfLinkService.setDocument(pdfDocument, null);
    });
  }
  getDocument();
}

function testForPDFJS() {
  if (!PDFJS.PDFViewer || !PDFJS.getDocument) {
    alert('Please build the pdfjs-dist library using\n' +
          '  `gulp dist`');
  }
}
