
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments('recipe_id');
    tbl.string('recipe_name', 128).notNullable().unique();
    tbl.string('created_at', 128).notNullable();
  })
  .createTable('units', tbl => {
    tbl.increments('unit_id');
    tbl.string('unit_name', 128).notNullable().unique();
  })
  .createTable('quantities', tbl => {
    tbl.increments('quantity_id');
    tbl.integer('quantity').notNullable();
    tbl.integer('unit_id')
      .unsigned()
      .notNullable()
      .references('unit_id')
      .inTable('units')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT');
  })
  .createTable('steps', tbl => {
    tbl.increments('step_id');
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT');
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredient_id');
    tbl.string('ingredient_name', 128).notNullable().unique();
    tbl.integer('quantity_id')
      .unsigned()
      .notNullable()
      .references('quantity_id')
      .inTable('quantities')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT');
    tbl.integer('step_id')
      .unsigned()
      .notNullable()
      .references('step_id')
      .inTable('steps')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('quantities')
    .dropTableIfExists('units')
    .dropTableIfExists('recipes');
};

