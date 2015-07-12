"use strict";

angular.module('signature').controller('uploadController', function($scope, uploadService) {
	$scope.$watch('files', function() {
		var files = $scope.files;
		uploadService.upload(files);
	});
});