(function selectNutritionControllerIFFE() {

  var SelectNutritionController = function(recipesFactory) {
    // this.appSettings = appSettings;
    // this.recipes = recipesFactory.recipes;
    // this.recipe = recipesFactory.recipe;
    this.selectedNutritionPick = "";
    // this.dailyCalcs = 1000;

    // var getRecipe = function() {
    //   var id = $routeParams.recipeId;
    //   recipesFactory.getRecipe(id);
    // };
    this.selectedNutrition = function(selectedNutritionPick) {

      // here we know the pulldown has been changed

      this.pulldownVisible = false;
      recipesFactory.getNutritionPickRecipes(selectedNutritionPick);
      this.recipes = recipesFactory.recipes;
      this.recipesVisible = true;
    };


    function init() {
      this.pulldownVisible = true;
      this.recipesVisible = false;

    };
    init();
  }






  // this.totalCaloriesPercentage = function(cal) {
  //   this.recipes.forEach(function(recipe) {
  //     var totalCalPercent = recipe.totalCalories;
  //     var percentCal = (totalCalPercent / 2000) * 100
  //     return percentCal;
  //   })
  // }


  SelectNutritionController.$inject = ['recipesFactory'];
  angular.module('recipeApp').controller("SelectNutritionController", SelectNutritionController);
})()
