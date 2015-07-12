"use strict";

angular.module('signature').directive('draw', function() {
	return {
		link: function($scope, element, attrs) {
			var canvas = document.querySelector("canvas");
			var signaturePad = new SignaturePad(canvas);
			
			$scope.save = function() {
				alert(signaturePad.toDataURL()); 
			}
			
			$scope.clear = function() {
			    signaturePad.clear();
			}
		}
	}
});