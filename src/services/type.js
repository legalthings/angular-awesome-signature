"use strict";

angular.module('awesome-signature').service('type', function(iam, session) {
  var service = {
    fonts: [
      { name: "Arial", family: "arial" },
      { name: "Verdana", family: "verdana" },
      { name: "Georgia", family: "georgia" },
      { name: "Times New Roman", family: "times new roman"}
    ],

    save: function(name, fontFamily) {
          iam.signatures.save({
              'user': session.user.id,
              'signature': name
            }
          )
    }
  }

  return service;
});