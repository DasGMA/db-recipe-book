
exports.up = function(knex, Promise) {
    table.increments()
    table.string('name').notNullable()
    table.integer('dishId')
        .unsigned()
        .references('id')
        .inTable('dishes')
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
