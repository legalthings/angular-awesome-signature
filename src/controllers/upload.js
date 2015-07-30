"use strict";

angular.module('awesome-signature').controller('uploadController', function($scope, convert) {
  $scope.file = "";
  var files;

  $scope.$watch('files', function() {
    files = $scope.files;
    if (files != null) $scope.file = files[0].name;
  });

  $scope.upload = function() {
    if (files != null) convert.toBase64(files);
  }
});