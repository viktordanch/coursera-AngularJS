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
        templateUrl: 'js/templates/main-categories.template.html',
        controller: 'MainCategoriesController as mainCategories',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/categories/{categoryShortName}/items',
        templateUrl: 'js/templates/main-items.template.html',
        controller: 'MainItemsController as mainItems',
        resolve: {
          items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });

  }
})();
