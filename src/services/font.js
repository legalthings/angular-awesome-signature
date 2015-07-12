"use strict";

angular.module('signature').service('fontService', function() {
  var service = {
    fonts: [
      { name: "Arial", family: "arial" },
      { name: "Verdana", family: "verdana" },
      { name: "Georgia", family: "georgia" }
    ],

    saveSignature: function(name, fontFamily) {
      return alert("Saving signature!\nYour name is " + name + "\nFont-family: " + fontFamily);
    }
  }

  return service;
});