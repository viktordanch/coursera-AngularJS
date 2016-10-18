(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'js/templates/home.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'js/components/categories/templates/main-categories.template.html',
        controller: 'MainCategoriesController as mainCategories',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories().then(function (categories) {
               return categories.data;
            });
          }]
        }
      })

      .state('items', {
        url: '/categories/{categoryShortName}/items',
        templateUrl: 'js/components/items/templates/main-items.template.html',
        controller: 'MainItemsController as mainItems',
        resolve: {
          items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
              .then(function (items) {
                return items.data.menu_items;
              });
          }]
        }
      });

  }
})();
