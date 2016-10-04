(function () {
  'use strict';

  angular.module('MsgApp', []).
    controller('MsgController', MsgController).
    filter('loves', LovesFilter);

  MsgController.$inject = ['$scope', '$filter', 'lovesFilter'];

  function MsgController ($scope, $filter, lovesFilter) {
    $scope.name = 'Yaakov';
    $scope.stateOfBeing = 'hungry';
    $scope.cost = .45;

    var msg = 'someInput';
    $scope.msg = msg

    $scope.feedYaakov = function () {
      $scope.stateOfBeing = 'fed';
    };

    $scope.sayMessage = function () {
      var msg = 'Yaakov likes to eat healthy snacks at night!';
      var output = $filter('uppercase')(msg);
      return output
    };
  };

  function LovesFilter () {
    return function (input) {
      input = input  || '!!!';
      return input + 22;
    }
  }
})();