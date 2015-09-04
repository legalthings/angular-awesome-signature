angular.module('awesomeSignature').controller('drawController', function ($scope) {
  "use strict";

  $scope.save = function () {
    var signature = $scope.accept();
    $scope.signature.dataUrl = signature.dataUrl;
  }
});