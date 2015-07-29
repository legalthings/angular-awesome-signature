"use strict";

angular.module('awesome-signature').directive('phoneSelector', function(sms) {
  return {
    restrict: 'EA',
    templateUrl: 'src/directives/phone.tpl.html',
    replace: true,
    controller: [
      '$scope',
      function ($scope) {
        var telInput = $("#phone");

        telInput.intlTelInput({
          defaultCountry: 'nl',
          preferredCountries: ['nl'],
          utilsScript: "vendor/intl-tel-input/lib/libphonenumber/build/utils.js"
        });

        $scope.accept = function () {
          var num = telInput.intlTelInput("getNumber");
          sms.send(num);
        }
      }
    ]
  }
});