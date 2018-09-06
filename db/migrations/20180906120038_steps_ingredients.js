
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps_ingredients', table => {
    table.increments()
    table.integer('recipe_id')
         .unsigned()
         .references('id')
         .inTable('recipes')
    table.integer('ingredient_id')
         .unsigned()
         .references('id')
         .inTable('ingredients')
    table.string('quantity')
         .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('steps_ingredients')
};
