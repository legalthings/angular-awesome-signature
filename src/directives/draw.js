"use strict";

angular.module('awesome-signature').directive('awesomeDraw', function() {
  return {
    scope: {
      'onSave': '&save'
    },
    controller: ['$scope', function ($scope) {
        $scope.onSave = function () {
          var signature = $scope.accept();
          $scope.save(signature);
        }
      }
    ]
  }
});
