"use strict";

angular.module('awesome-signature').directive('draw', function() {
  return {
    restrict: 'EA',
    templateUrl: 'src/directives/draw.tpl.html',
    replace: true,
    controller: [
      '$scope',
      function ($scope) {
        $scope.save = function () {
          var signature = $scope.accept();
          return signature;
        }
      }
    ]
  }
});