
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: 1, description: 'Make dough'},
        {recipe_id: 1, step_number: 2, description: 'Get ready some beef'},
        {recipe_id: 1, step_number: 3, description: 'Put in the oven'}
      ]);
    });
};
