(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('MainCategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories) {
    var mainCategories = this;
    mainCategories.categories = categories.data;
  }

})();
