"use strict";

var app = angular.module('app', [
  'awesomeSignature',
]);

app.config(['$resourceProvider', function ($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.controller('AppCtrl', function ($scope, $window) {
  $scope.signature = {};

  $scope.tabName = "Draw";
  $scope.tab = 'src/demo/tabs/draw.tpl.html';

  $scope.tabs = [
    { name: "Draw", url: "src/demo/tabs/draw.tpl.html", active: true },
    { name: "Phone", url: "src/demo/tabs/phone.tpl.html", active: false },
    { name: "Type", url: "src/demo/tabs/type.tpl.html", active: false },
    { name: "Upload", url: "src/demo/tabs/upload.tpl.html", active: false }
  ];

  $scope.switchTab = function (tab) {
    $scope.tab = tab.url;
    $scope.tabName = tab.name;
  }
});
