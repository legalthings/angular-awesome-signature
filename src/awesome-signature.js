"use strict";

angular.module('awesomeSignature', [
  'ui.bootstrap',
  'signature',
  'angularFontSelection',
  'ngFileUpload',
  'ngResource',
  'internationalPhoneNumber'
]);

angular.module('awesomeSignature').constant('awesomeConfig', {
	endPoint: "https://m7nig4x4x1.execute-api.eu-west-1.amazonaws.com/dev/sms-lambda-development"
});

angular.module('awesomeSignature').config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
}]);