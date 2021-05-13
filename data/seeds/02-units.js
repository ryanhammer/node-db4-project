
exports.seed = function(knex) {
  return knex('units').insert([   
    { unit_name: 'Item(s)' },
    { unit_name: 'Cups' },
    { unit_name: 'Tbsp' },
    { unit_name: 'Tsp' },
    { unit_name: 'Ounces' },
    { unit_name: 'Scoops' }
  ]);
};
