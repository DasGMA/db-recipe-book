
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table => {
    table.increments()
    table.integer('recipe_id')
         .unsigned()
         .references('id')
         .inTable('recipes')
    table.integer('step_number')
    table.string('description')
         .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('steps')
};
