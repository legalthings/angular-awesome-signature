"use strict";

angular.module('awesome-signature').controller('phoneController', function ($scope, sms) {
  var telInput = $("#phone");

  $scope.send = function () {
    var num = telInput.intlTelInput("getNumber");
    sms.send(num);
  }
});