"use strict";

angular.module('awesome-signature').directive('typefaceSelector', function(type) {
  return {
    restrict: 'EA',
    templateUrl: 'src/directives/type.tpl.html',
    replace: true,
    controller: [
      '$scope',
      function ($scope) {
        $scope.name = "";
        $scope.fonts = type.fonts;
        $scope.fontFamily = "unselected";
        
        $scope.$watch("name", function() {
          var canvas = document.querySelectorAll('canvas');
          
          for (var i = 0; i < canvas.length; ++i) {
            var ctx = canvas[i].getContext('2d');
            ctx.font = "30px " + $scope.fonts[i].family;
            ctx.clearRect(0, 0, canvas[i].width, canvas[i].height);
            ctx.fillText($scope.name, 10, canvas[i].height / 2 - 10);
          }
        });
        
        $scope.accept = function () {
          if ($scope.name.length < 1) {
            alert("Please type your name.");
            return;
          }
          if ($scope.fontFamily == "unselected") {
            alert("You must select a font before you can save!");
            return;
          }
          
          var selCanvas = document.getElementById($scope.fontFamily);
          var img = selCanvas.toDataURL();
          
          type.save(img);
        }
      }
    ]
  }
});