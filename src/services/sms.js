angular.module('awesomeSignature').service('sms',
  ['$http', '$location', 'awesomeConfig',
  function ($http, $location, awesomeConfig) {
    "use strict";
    
    var url = $location.protocol() + '://' + $location.host();
    if ($location.port() !== ($location.protocol() === 'https' ? 443 : 80)) {
      url = url + ':' + $location.port();
    }

    var service = {
      send: function (destination, name, session) {
        $http({
          url: awesomeConfig.endPoint,
          method: "post",
          data: {
            "reference": "signature",
            "language": "en",
            "session": session,
            "source": "LegalThings",
            "destination": destination,
            "name": name,
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
  ]);
