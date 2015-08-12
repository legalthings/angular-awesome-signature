"use strict";

angular.module('awesome-signature').service('fileToDataUrl', function () {
  return function (file, callback) {
    if (!file) return;

    var reader = new FileReader();

    reader.onload = function (e) {
      callback(e.target.result);
    }

    reader.readAsDataURL(file);
  }
});
