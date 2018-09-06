
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'salt'},
        {ingredient_name: 'pepper'},
        {ingredient_name: 'onion'},
        {ingredient_name: 'tomato'},
        {ingredient_name: 'water'},
        {ingredient_name: 'flour'},
        {ingredient_name: 'hot dog bun'},
        {ingredient_name: 'lasagna sheets'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'beef'},
        {ingredient_name: 'chicken'},
        {ingredient_name: 'pickles'},
      ]);
    });
};
