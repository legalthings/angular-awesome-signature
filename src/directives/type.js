"use strict";

angular.module('awesome-signature').directive('awesomeType', function(type) {
  return {
    templateUrl: 'src/directives/type.tpl.html',
    replace: true,
    scope: {
      'onAccept': '&accept',
      'name': '='
    },
    link: function(scope, elm, attrs) {
      scope.$watch("name", function(value) {
        var canvas = document.querySelectorAll('canvas');

        for (var i = 0; i < canvas.length; ++i) {
           var ctx = canvas[i].getContext('2d');
           ctx.font = scope.fonts[i].size + " " + scope.fonts[i].family;
           ctx.clearRect(0, 0, canvas[i].width, canvas[i].height);
           ctx.fillText(value, 10, 10);
         }
      });
    },
    controller: ['$scope', function ($scope) {
        $scope.name = "John Doe";
        $scope.fonts = type.fonts;
        $scope.fontFamily = "unselected";
        
        $scope.onAccept = function () {
          var selCanvas = document.getElementById($scope.fontFamily);
          var img = selCanvas.toDataURL();
          type.save(img);
        }
      }
    ]
  }
});
