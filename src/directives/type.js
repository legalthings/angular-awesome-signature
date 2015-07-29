"use strict";

angular.module('awesome-signature').directive('typefaceSelector', function(type) {
  return {
    restrict: 'EA',
    templateUrl: 'src/directives/type.tpl.html',
    replace: true,
    controller: [
      '$scope',
      function ($scope) {
        $scope.name = "John Doe";
        $scope.fonts = typeService.fonts;
        $scope.fontFamily = "unselected";
        
        $scope.accept = function () {
          if ($scope.fontFamily == "unselected") {
            alert("You must select a font before you can save!");
            return;
          }
          
          type.save($scope.name, $scope.fontFamily);
        }
      }
    ]
  }
});