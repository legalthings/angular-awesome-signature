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
  $scope.tab = 'demo/tabs/draw.tpl.html';

  $scope.tabs = [
    { name: "Draw", url: "demo/tabs/draw.tpl.html", active: true },
    { name: "Phone", url: "demo/tabs/phone.tpl.html", active: false },
    { name: "Type", url: "demo/tabs/type.tpl.html", active: false },
    { name: "Upload", url: "demo/tabs/upload.tpl.html", active: false }
  ];

  $scope.switchTab = function (tab) {
    $scope.tab = tab.url;
    $scope.tabName = tab.name;
  }
});
