"use strict";

angular.module('awesome-signature', [
  'ui.bootstrap',
  'signature',
  'angularFontSelection',
  'ngFileUpload',
  'ngResource',
  'internationalPhoneNumber'
]);

angular.module('awesome-signature').config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
}
]);