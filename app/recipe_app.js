(function recipesAppIIFE() {
  var app = angular.module('recipeApp', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'recipesController',
        // controllerAs: 'recipesCtrl',
        // templateUrl: 'app/views/customers_done.html',

      })
      .when('/recipes/:recipeId', {
        controller: 'RecipeController',
        controllerAs: 'recipeCtrl',
        templateUrl: 'app/views/recipe.html'
      })
    // .when('/orders/:customerId', {
    //   controller: 'ordersController',
    //   controllerAs: 'ordersCtrl',
    //   templateUrl: 'app/views/orders_done.html',

    .otherwise({
      redirectTo: '/'
    });
  });

})();
