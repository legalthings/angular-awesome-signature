"use strict";

angular.module('awesomeSignature', [
  'ui.bootstrap',
  'signature',
  'fontSelection',
  'ngFileUpload',
  'ngResource',
  'internationalPhoneNumber'
]);

angular.module('awesomeSignature').constant('awesomeConfig', {
	endPoint: "https://m7nig4x4x1.execute-api.eu-west-1.amazonaws.com/dev/sms-lambda-development"
});

angular.module('awesomeSignature').config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
}]);
"use strict";

angular.module('awesomeSignature').controller('drawController', function ($scope) {
  $scope.save = function () {
    var signature = $scope.accept();
    $scope.signature.dataUrl = signature.dataUrl;
  }
});
"use strict";

angular.module('awesomeSignature').controller('phoneController', function ($scope, sms) {
  var telInput = $("#phone");

  $scope.send = function () {
    var num = telInput.intlTelInput("getNumber");
    sms.send(num);
  }
});
"use strict";

angular.module('awesomeSignature').controller('typeController', function ($scope) {
  $scope.fonts = [
    { name: "Indie Flower", family: "Indie Flower", size: "25px" },
    { name: "Covered By Your Grace", family: "Covered By Your Grace", size: "25px" },
    { name: "Kaushan Script", family: "Kaushan Script", size: "25px" }
  ];

  $scope.saveFont = function () {
    $scope.signature.dataUrl = $scope.selectedFont.dataUrl;
  };
});
"use strict";

angular.module('awesomeSignature').controller('uploadController', function ($scope, fileToDataUrl) {
  $scope.$watch('file', function () {
    if ($scope.file) $scope.name = $scope.file.name;
  });

  $scope.upload = function () {
    fileToDataUrl($scope.file, function (dataUrl) {
      $scope.$apply(function () {
        $scope.signature.dataUrl = dataUrl;
      });
    });
  }
});
"use strict";

angular.module('awesomeSignature').service('fileToDataUrl', function () {
  return function (file, callback) {
    if (!file) return;

    var reader = new FileReader();

    reader.onload = function (e) {
      callback(e.target.result);
    }

    reader.readAsDataURL(file);
  }
});

"use strict";

angular.module('awesomeSignature').service('sms',
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
