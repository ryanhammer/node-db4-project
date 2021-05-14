
exports.seed = function(knex) {
  return knex('quantities').insert([
    { quantity: 1, unit_id: 1 },
    { quantity: 3, unit_id: 1 },
    { quantity: 1, unit_id: 3 },
    { quantity: 0.5, unit_id: 2 },
    { quantity: 1, unit_id: 2 },
    { quantity: 2, unit_id: 3 },
    { quantity: 0.5, unit_id: 4 },
    { quantity: 4, unit_id: 5 },
    { quantity: 3, unit_id: 2 },
    { quantity: 3, unit_id: 6 },
    { quantity: 1, unit_id: 2 },
  ]);
};
