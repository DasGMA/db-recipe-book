
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Vegetarian pizza', dish_id: 1},
        {recipe_name: 'Beef pizza', dish_id: 1},
        {recipe_name: 'Chicken pizza', dish_id: 1},
      ]);
    });
};
