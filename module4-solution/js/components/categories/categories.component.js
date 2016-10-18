(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'js/components/categories/templates/categories.template.html',
      bindings: {
        categories: '<'
      }
    });

})();
