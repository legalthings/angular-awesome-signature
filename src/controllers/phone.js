"use strict";

angular.module('signature').controller('phoneController', function($scope, smsService) {
	$scope.phone = "3100000000";
	
	$scope.onSendClick = function() {
		smsService.sendSMS($scope.phone);
	}
});