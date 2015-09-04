angular.module('awesomeSignature').service('fileToDataUrl', function () {
  "use strict";
  
  return function (file, callback) {
    if (!file) return;

    var reader = new FileReader();

    reader.onload = function (e) {
      callback(e.target.result);
    }

    reader.readAsDataURL(file);
  }
});
