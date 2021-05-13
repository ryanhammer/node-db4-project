
exports.seed = function(knex) {
  return knex('recipes').insert([   
    { recipe_name: 'Scrambled Eggs' },
    { recipe_name: 'Chocolate Ice Cream' }
  ]);
};
