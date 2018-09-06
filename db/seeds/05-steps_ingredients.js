
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps_ingredients').insert([
        {recipe_id: 1, ingredient_id: 6, quantity: '4 cups'},
        {recipe_id: 1, ingredient_id: 5, quantity: '1 cup'},
        {recipe_id: 1, ingredient_id: 1, quantity: '1 pinch'},
      ]);
    });
};
