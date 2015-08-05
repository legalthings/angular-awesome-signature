"use strict";

angular.module('awesome-signature').service('sms', function($resource) {
  var service = {
    plivo: $resource('https://api.plivo.com/v1/Account/MAMGQZOTK5ZTZLOWIWNJ/Message/'),
    sourcePhone: "+3152249470",

    send: function(nr) {
      service.plivo.save({
        'src': service.sourcePhone,
        'dst': nr,
        'text': "Dear user, please draw your signature on the following webpage",
        'type': 'sms'
      }, function (response) {
        console.log("Response: " + response.message);
      });
    }
  }

  return service;
});
