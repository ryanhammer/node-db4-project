
exports.seed = function(knex) {
  const timestampOne = new Date(Date.now());
  const timestampTwo = new Date(Date.now());

  return knex('recipes').insert([   
    { recipe_name: 'Scrambled Eggs', created_at: `${timestampOne}` },
    { recipe_name: 'Chocolate Ice Cream', created_at: `${timestampTwo}` }
  ]);
};
