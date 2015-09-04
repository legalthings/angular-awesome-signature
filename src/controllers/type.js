angular.module('awesomeSignature').controller('typeController', function ($scope) {
  "use strict";

  $scope.fonts = [
    { name: "Indie Flower", family: "Indie Flower", size: "25px" },
    { name: "Covered By Your Grace", family: "Covered By Your Grace", size: "25px" },
    { name: "Kaushan Script", family: "Kaushan Script", size: "25px" }
  ];

  $scope.saveFont = function () {
    $scope.signature.dataUrl = $scope.selectedFont.dataUrl;
  };
});
