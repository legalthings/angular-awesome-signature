"use strict";

angular.module('signature').service('smsService', function() {
  var service = {
    sendSMS: function(nr) {
      //returns undefined for some reason...
      return alert(nr);
		}
  }

  return service;
});