"use strict";

angular.module('awesomeSignature').controller('uploadController', function ($scope, fileToDataUrl) {
  $scope.$watch('file', function () {
    if ($scope.file) $scope.name = $scope.file.name;
  });

  $scope.upload = function () {
    fileToDataUrl($scope.file, function (dataUrl) {
      $scope.$apply(function () {
        $scope.signature.dataUrl = dataUrl;
      });
    });
  }
});