(function () {
  'use strict';

  angular.module('LunchChecker', [])

    .controller('LunchCheckerController', function ($scope) {
      $scope.allItems = '';
      $scope.userMessage = {
        type: '',
        text: ''
      };
      //$scope.totalValue = 0;
      $scope.checkLunch = function () {
        var lunchItemsArray = $scope.allItems.split(',');
        var checkedArray = [];

        lunchItemsArray.forEach(function (item) {
          if (item.replace(/ /, '').length > 0) {
            checkedArray.push(item);
          }
        });

        if (checkedArray.length == 0) {
          $scope.userMessage = { text: 'Please enter data first', status: 'error' };
        }
        else if (checkedArray.length < 4) {
          $scope.userMessage = { text: 'Enjoy!', status: 'success' };
        } else if (checkedArray.length > 3) {
          $scope.userMessage = { text: 'Too much!', status: 'success' };
        }
      };
    });
})();