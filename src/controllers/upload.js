"use strict";

angular.module('awesome-signature').controller('uploadController', function($scope, convert) {
  $scope.$watch('files', function() {
    var files = $scope.files;

    if (files != null) convert.toBase64(files);
  });
});