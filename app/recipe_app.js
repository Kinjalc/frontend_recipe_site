(function recipesAppIIFE() {
  var app = angular.module('recipeApp', ['ngRoute']);



  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/homePage.html',
        controller: 'SelectNutritionController',
        controllerAs: 'selectNutritionCtrl'
      })


    .when('/recipes', {
      controller: 'RecipesController',
      controllerAs: 'recipesCtrl',
      templateUrl: 'app/views/recipes.html',

    })
      .when('/recipes/:recipeId', {
        controller: 'RecipeController',
        controllerAs: 'recipeCtrl',
        templateUrl: 'app/views/recipe.html'
      })


    .otherwise({
      redirectTo: '/'
    });
  });

  app.config(['$httpProvider',
    function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
    }
  ])

})();
