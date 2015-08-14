"use strict";

angular.module('awesomeSignature').controller('typeController', function ($scope) {
  $scope.fonts = [
    { name: "Arial", family: "arial", size: "25px" },
    { name: "Verdana", family: "verdana", size: "25px" },
    { name: "Georgia", family: "georgia", size: "25px" },
    { name: "Times New Roman", family: "times new roman", size: "25px" }
  ];

  $scope.saveFont = function () {
    $scope.signature.dataUrl = $scope.selectedFont.dataUrl;
  };
});