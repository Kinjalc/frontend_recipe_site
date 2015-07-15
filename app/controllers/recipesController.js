// var recipeApp = angular.module('recipeApp', []);

(function recipesControllerIFFE() {

  var RecipesController = function(recipesFactory) {
    // this.appSettings = appSettings;
    this.recipes = recipesFactory.recipes;
    this.recipe = recipesFactory.recipe;
    this.dailyCalcs = 1000;

    // var getRecipe = function() {
    //   var id = $routeParams.recipeId;
    //   recipesFactory.getRecipe(id);
    // };

    function init() {
      recipesFactory.getRecipes();
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

  RecipesController.$inject = ['recipesFactory'];
  angular.module('recipeApp').controller("RecipesController", RecipesController);
})()





// (function(angular) {

//   // Constructor Function
//   function PetsController() {
//     this.pets = [{
//       name: 'Rover',
//       species: 'Dog',
//       age: 7
//     }, {
//       name: 'Milo',
//       species: 'Horse',
//       age: 3
//     }, {
//       name: 'Sh*tCat',
//       species: 'Cat',
//       age: 11
//     }, {
//       name: 'Mertle',
//       species: 'Turtle',
//       age: 123
//     }];

//   }

//   PetsController.prototype.totalPets = function(pet) {
//     return this.pets.length;
//   };

//   PetsController.prototype.oldestPet = function() {
//     var candidatePet = this.pets[0];

//     this.pets.forEach(function(pet) {
//       if (pet.age > candidatePet.age) {
//         candidatePet = pet;
//       }
//     });

//     return candidatePet;
//   };

//   // The Controller is part of the module.
//   angular.module('petsApp').controller('PetsController', PetsController);

// })(angular);
