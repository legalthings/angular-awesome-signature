"use strict";

angular.module('awesomeSignature').controller('phoneController', function ($scope, sms) {
  var telInput = $("#phone");

  $scope.send = function () {
    var num = telInput.intlTelInput("getNumber");
    var name = "User";
    var session = "1234";
    sms.send(num, name, session);
  }
});