(function recipeControllerIFFE() {

  var RecipeController = function(recipesFactory, $routeParams) {
    // this.appSettings = appSettings;

    this.recipe = recipesFactory.recipe;

    var recipeId = $routeParams.recipeId

    var getRecipe = function(recipeId) {
      recipesFactory.getRecipe(id);
    };

    function init() {
      recipesFactory.getRecipe(recipeId);
    }
    init();

    // this.totalCaloriesPercentage = function(cal) {
    //   this.recipes.forEach(function(recipe) {
    //     var totalCalPercent = recipe.totalCalories;
    //     var percentCal = (totalCalPercent / 2000) * 100
    //     return percentCal;
    //   })
    // }
  };

  RecipeController.$inject = ['recipesFactory', '$routeParams'];
  angular.module('recipeApp').controller("RecipeController", RecipeController);
})()
