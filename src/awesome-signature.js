angular.module('awesomeSignature', [
  'ui.bootstrap',
  'signature',
  'fontSelection',
  'ngFileUpload',
  'ngResource',
  'internationalPhoneNumber'
]);

angular.module('awesomeSignature').constant('awesomeConfig', {
  endPoint: "https://m7nig4x4x1.execute-api.eu-west-1.amazonaws.com/dev/sms-lambda-development"
});

angular.module('awesomeSignature').config(['$httpProvider', function ($httpProvider) {
  "use strict";

  $httpProvider.defaults.useXDomain = true;
}]);