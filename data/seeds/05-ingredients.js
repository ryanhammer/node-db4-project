
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'eggs', quantity_id: 2, step_id: 2 },
    { ingredient_name: 'milk', quantity_id: 6, step_id: 3 },
    { ingredient_name: 'butter', quantity_id: 3, step_id: 4 },
    { ingredient_name: 'salt', quantity_id: 7, step_id: 8 },
    { ingredient_name: 'pepper', quantity_id: 7, step_id: 8 },
    { ingredient_name: 'chocolate ice cream', quantity_id: 10, step_id: 11 }
  ]);
};
