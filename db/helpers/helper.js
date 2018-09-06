
const db = require('../dbConfig');

module.exports = {

    // getDishes(): should return a list of all dishes in the database.
    getDishes: () => {
        return db('dishes')
            .select('name as dish')
    },

    // getDish(id): should return the dish with the provided id and include a list of the related recipes.
    getDish: (id) => {
        return db('dishes')
            .select('dishes.name as dish', 'recipes.recipe_name as recipe')
            .join('recipes', 'recipes.dish_id', 'dishes.id')
            .where('dishes.id', id)
    },

    // addDish(dish): should add the dish to the database and return the id of the new dish.
    addDish: (dish) => {
        return db('dishes')
            .insert(dish)
    },

    // getRecipes(): should return a list of all recipes in the database including the dish they belong to.
    getRecipes: () => {
        return db('recipes')
            .select('recipes.id', 'dishes.name as dish', 'recipes.recipe_name as recipe')
            .join('dishes', 'dishes.id', 'recipes.dish_id')
    },

    // addRecipe(recipe): should add a recipe to the database and return the id of the new recipe.
    addRecipe: (recipe) => {
        return db('recipes')
            .insert(recipe)
    }

}