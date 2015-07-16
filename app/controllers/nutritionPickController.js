(function nutritionPickControllerIFFE() {

  var NutritionPickController = function(recipesFactory) {
    // this.appSettings = appSettings;
    this.recipes = recipesFactory.nutritionPickRecipes;
    this.recipe = recipesFactory.recipe;
    this.selectedNutritionPick = this.nutritionPick[0];
    // this.dailyCalcs = 1000;

    // var getRecipe = function() {
    //   var id = $routeParams.recipeId;
    //   recipesFactory.getRecipe(id);
    // };

    function init() {
      recipesFactory.getNutritionPickRecipes();
    }
    init();

    // this.totalCaloriesPercentage = function(cal) {
    //   this.recipes.forEach(function(recipe) {
    //     var totalCalPercent = recipe.totalCalories;
    //     var percentCal = (totalCalPercent / 2000) * 100
    //     return percentCal;
    //   })
    // }
  }

  NutritionPickController.$inject = ['recipesFactory'];
  angular.module('recipeApp').controller("NutritionPickController", NutritionPickController);
})()
