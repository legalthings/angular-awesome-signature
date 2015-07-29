"use strict";

angular.module('awesome-signature').service('convert', function(iam) {
  var service = {
    toBase64: function(files) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          if (file.name.toLowerCase().indexOf(".jpg") == -1 && file.name.toLowerCase().indexOf(".png") == -1) {
            alert("This file isn't allowed.");
            return;
          }
          
          var reader = new FileReader();
          reader.onload = function(e) {
            iam.signatures.save({
                'user': session.user.id,
                'signature': e.target.result
              }
          }
          
          reader.readAsDataURL(file);
        }
      }
    }
  }

  return service;
});