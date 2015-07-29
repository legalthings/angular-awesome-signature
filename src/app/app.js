"use strict";

var app = angular.module('app', [
  'awesome-signature',
]);

app.directive('responsiveCanvas', function() {
  var c = $('#canvas');
  var ct = c.get(0).getContext('2d');
  var container = $(c).parent();

  $(window).resize(resizeCanvas);

  function resizeCanvas() {
    c.attr('width', $(container).width());
  }

  resizeCanvas();
});

app.controller('AppCtrl', function($scope, $window) {
  $scope.tabName = "Draw";
  $scope.tab = 'src/tabs/draw.tpl.html';

  $scope.tabs = [
    { name: "Draw", url: "src/tabs/draw.tpl.html", active: true },
    { name: "Phone", url: "src/tabs/phone.tpl.html", active: false },
    { name: "Type", url: "src/tabs/type.tpl.html", active: false },
    { name: "Upload", url: "src/tabs/upload.tpl.html", active: false }
  ];

  $scope.switchTab = function(tab) {
    $scope.tab = tab.url;
    $scope.tabName = tab.name;
  }
});