angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('AppCtrl', function($scope) {
    $scope.currentNavItem = 'page1';
  })