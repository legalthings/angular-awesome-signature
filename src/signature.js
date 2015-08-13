"use strict";

angular.module('awesome-signature', [
  'ui.bootstrap',
  'signature',
  'angularFontSelection',
  'ngFileUpload',
  'ngResource',
  'internationalPhoneNumber'
]);

angular.module('awesome-signature').constant('awesomeConfig', {
	endPoint: "https://m7nig4x4x1.execute-api.eu-west-1.amazonaws.com/dev/sms-lambda-development"
});

angular.module('awesome-signature').config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
}]);