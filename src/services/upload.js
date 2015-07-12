"use strict";

angular.module('signature').service('uploadService', function() {
  var service = {
    check: function(file) {
      if (file.name.indexOf(".txt") != -1) alert("New file to upload: " + file.name);
      else alert("This file isn't allowed.");
    },

    upload: function(files) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          service.check(file);
        }
      }
    }
  }

  return service;
});