(function recipesFactoryIFFE() {

  var recipesFactory = function($http) {
    var factory = {};
    factory.recipes = [];
    // factory.nutritionPickRecipes = [];
    factory.recipe = {};


    factory.getRecipes = function() {

      return $http.get('http://localhost:3000/recipes').success(function(response) {
        angular.copy(response, factory.recipes);
      });
    };

    factory.getRecipe = function(recipeId) {
      return $http.get('http://localhost:3000/recipes/' + recipeId).success(function(response) {
        angular.copy(response[0], factory.recipe);
      });

    }

    factory.getNutritionPickRecipes = function(nutritionPick) {
      return $http.get('http://localhost:3000/recipes/nutrition/' + nutritionPick).success(function(response) {
        angular.copy(response, factory.recipes);
      });

    }


    return factory
  }
  angular.module('recipeApp').factory('recipesFactory', recipesFactory);

  recipesFactory.$inject = ['$http'];

})()






// var recipes = [{
//     _id: "55a433e33b42ae26a382b8b5",
//     title: "Stovetop Avocado Mac and Cheese",
//     source_url: "http://www.twopeasandtheirpod.com/stovetop-avocado-mac-and-cheese/",
//     image_url: "http://static.food2fork.com/avocadomacandcheesedc99.jpg",
//     recipe_id: "54384",
//     "calculated": false,
//     "ingredients": [{
//       "name": "2 tablespoons butter",
//       "_id": "55a433e43b42ae26a382b8b6",
//       "vitaminB12": {
//         "value": 0.0482375,
//         "unit": "µg"
//       },
//       "vitaminB6": {
//         "value": 0.00085125,
//         "unit": "mg"
//       },
//       "vitaminA": {
//         "value": 194.085,
//         "unit": "µg"
//       },
//       "vitaminC": {
//         "value": 0,
//         "unit": "mg"
//       },
//       "polyUnsaturatedFat": {
//         "value": 0.86345125,
//         "unit": "g"
//       },
//       "monoUnsaturatedFat": {
//         "value": 5.96470875,
//         "unit": "g"
//       },
//       "fat": {
//         "value": 23.014962500000003,
//         "unit": "g"
//       },
//       "carbohydrates": {
//         "value": 0.017025,
//         "unit": "g"
//       },
//       "protein": {
//         "value": 0.2411875,
//         "unit": "g"
//       }
//     }, {
//       "name": "2 tablespoons all-purpose flour",
//       "_id": "55a433e43b42ae26a382b8b8",
//       "vitaminB12": {
//         "value": 0,
//         "unit": "µg"
//       },
//       "vitaminB6": {
//         "value": 0.006874999999999999,
//         "unit": "mg"
//       },
//       "vitaminA": {
//         "value": 0,
//         "unit": "µg"
//       },
//       "vitaminC": {
//         "value": 0,
//         "unit": "mg"
//       },
//       "polyUnsaturatedFat": {
//         "value": 0.06453125,
//         "unit": "g"
//       },
//       "monoUnsaturatedFat": {
//         "value": 0.013593749999999998,
//         "unit": "g"
//       },
//       "fat": {
//         "value": 0.153125,
//         "unit": "g"
//       },
//       "carbohydrates": {
//         "value": 11.9234375,
//         "unit": "g"
//       },
//       "protein": {
//         "value": 1.6140625,
//         "unit": "g"
//       }
//     }, {
//       "name": "1 cup milk",
//       "_id": "55a433e43b42ae26a382b8b7",
//       "vitaminB12": {
//         "value": 0.931,
//         "unit": "µg"
//       },
//       "vitaminB6": {
//         "value": 0.11025,
//         "unit": "mg"
//       },
//       "vitaminA": {
//         "value": 137.20000000000002,
//         "unit": "µg"
//       },
//       "vitaminC": {
//         "value": 2.45,
//         "unit": "mg"
//       },
//       "polyUnsaturatedFat": {
//         "value": 0.17395,
//         "unit": "g"
//       },
//       "monoUnsaturatedFat": {
//         "value": 1.3597500000000002,
//         "unit": "g"
//       },
//       "fat": {
//         "value": 4.704,
//         "unit": "g"
//       },
//       "carbohydrates": {
//         "value": 12.1765,
//         "unit": "g"
//       },
//       "protein": {
//         "value": 8.526,
//         "unit": "g"
//       }
//     }],
//     "__v": 0,
//     "totalProtein": 10.38125,
//     "totalCalories": 388.84163750000005,
//     "percentProtein": 10.679154698292823,
//     "percentCarbohydrates": 24.809032957536598,
//     "percentFat": 28.67191659740914
//   }, {
//     _id: "55a4344876aeb35ca35fe135",
//     "title": "Buffalo Chicken Grilled Cheese Sandwich",
//     "source_url": "http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html",
//     "image_url": "http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg",
//     "recipe_id": "35171",
//     "calculated": false,
//     "ingredients": [{
//       "name": "1 tablespoon hot sauce",
//       "_id": "55a4344876aeb35ca35fe136",
//       "vitaminB12": {
//         "value": 0,
//         "unit": "µg"
//       },
//       "vitaminB6": {
//         "value": 0.022136999101638796,
//         "unit": "mg"
//       },
//       "vitaminA": {
//         "value": 1.1279999542236328,
//         "unit": "µg"
//       },
//       "vitaminC": {
//         "value": 10.546799571990967,
//         "unit": "mg"
//       },
//       "polyUnsaturatedFat": {
//         "value": 0.027635998878479003,
//         "unit": "g"
//       },
//       "monoUnsaturatedFat": {
//         "value": 0.004229999828338623,
//         "unit": "g"
//       },
//       "fat": {
//         "value": 0.05216999788284302,
//         "unit": "g"
//       },
//       "carbohydrates": {
//         "value": 0.24674998998641967,
//         "unit": "g"
//       },
//       "protein": {
//         "value": 0.0719099970817566,
//         "unit": "g"
//       }
//     }, {
//       "name": "2 slices bread",
//       "_id": "55a4344976aeb35ca35fe137",
//       "vitaminB12": {
//         "value": 0,
//         "unit": "µg"
//       },
//       "vitaminB6": {
//         "value": 0.04349999999999999,
//         "unit": "mg"
//       },
//       "vitaminA": {
//         "value": 0,
//         "unit": "µg"
//       },
//       "vitaminC": {
//         "value": 0,
//         "unit": "mg"
//       },
//       "polyUnsaturatedFat": {
//         "value": 0.8009999999999999,
//         "unit": "g"
//       },
//       "monoUnsaturatedFat": {
//         "value": 0.29949999999999993,
//         "unit": "g"
//       },
//       "fat": {
//         "value": 1.6649999999999998,
//         "unit": "g"
//       },
//       "carbohydrates": {
//         "value": 24.709999999999997,
//         "unit": "g"
//       },
//       "protein": {
//         "value": 4.424999999999999,
//         "unit": "g"
//       }
//     }],
//     "__v": 0,
//     "totalProtein": 4.496909997081755,
//     "totalCalories": 133.26916992921826,
//     "percentProtein": 13.497225200607607,
//     "percentCarbohydrates": 74.90629679239815,
//     "percentFat": 5.153990225330776
//   }

// ]
