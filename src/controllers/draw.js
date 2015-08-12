"use strict";

angular.module('awesome-signature').controller('drawController', function ($scope) {
  $scope.save = function () {
    var signature = $scope.accept();
    $scope.signature.dataUrl = signature.dataUrl;
  }
});