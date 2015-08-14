"use strict";

angular.module('awesomeSignature').controller('phoneController', function ($scope, sms) {
  var telInput = $("#phone");

  $scope.send = function () {
    var num = telInput.intlTelInput("getNumber");
    sms.send(num);
  }
});