"use strict";

angular.module('awesome-signature').service('type', function() {
  var service = {
    fonts: [
      { name: "Arial", family: "arial" },
      { name: "Verdana", family: "verdana" },
      { name: "Georgia", family: "georgia" },
      { name: "Times New Roman", family: "times new roman"}
    ],

    save: function(img) {
      return img;
    }
  }
  
  return service;
});