"use strict";

angular.module('awesome-signature').service('sms',
  function ($http, $location, awesomeConfig) {
    var url = $location.protocol() + '://' + $location.host();
    if ($location.port() !== ($location.protocol() === 'https' ? 443 : 80)) {
      url = url + ':' + $location.port();
    }

    var service = {
      send: function (destination) {
        $http({
          url: awesomeConfig.endPoint,
          method: "post",
          data: {
            "reference": "signature",
            "language": "en",
            "session": "000000000000000000001234",
            "source": "LegalThings",
            "destination": destination,
            "name": "User",
            "url": url
          }
        }).then(function (response) {
          console.log(response);
        }, function (response) {
          console.log(response);
        });
      }
    }

    return service;
  }
);
