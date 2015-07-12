"use strict";

angular.module('signature').controller('fontController', function($scope, fontService) {
  $scope.name = "John Doe";
  $scope.fonts = fontService.fonts;
  $scope.fontFamily = "unselected";

  $scope.onSaveClick = function() {
    fontService.saveSignature($scope.name, $scope.fontFamily);
  }
});