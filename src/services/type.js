"use strict";

angular.module('awesome-signature').service('type', function() {
  var service = {
    fonts: [
      { name: "Arial", family: "arial", size: "25px" },
      { name: "Verdana", family: "verdana", size: "25px" },
      { name: "Georgia", family: "georgia", size: "25px" },
      { name: "Times New Roman", family: "times new roman", size: "25px"}
    ]}
  return service;
});
