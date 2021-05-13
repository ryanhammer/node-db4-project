
exports.seed = function(knex) {
  return knex('steps').insert([
    { step_number: 1, recipe_id: 1, instructions: "Preheat a medium frying pan on the stove top's Low setting" },
    { step_number: 2, recipe_id: 1, instructions: 'In a large bowl, crack open and mix together eggs'},
    { step_number: 3, recipe_id: 1, instructions: 'Add milk (if desired) to add creaminess to eggs' },
    { step_number: 4, recipe_id: 1, instructions: 'Add butter or butter substitute to pan and stir to grease pan' },
    { step_number: 5, recipe_id: 1, instructions: 'Immediately after greasing pan, add egg mixture to pan' },
    { step_number: 6, recipe_id: 1, instructions: 'Periodically stir eggs in pan with spoon or spatula. As it cooks, mixture starts to solidify' },
    { step_number: 7, recipe_id: 1, instructions: 'Once egg mixture has reached desired level of hardness, remove from heat' },
    { step_number: 8, recipe_id: 1, instructions: 'If desired, add salt and pepper' },
    { step_number: 9, recipe_id: 1, instructions: 'Enjoy your tasty meal!' },
    { step_number: 1, recipe_id: 2, instructions: 'Remove ice cream from freezer and let sit for 10 minutes' },
    { step_number: 2, recipe_id: 2, instructions: 'Use scoop to remove ice cream from container and place into bowl' },
    { step_number: 3, recipe_id: 2, instructions: 'Add syrup or hot fudge if desired' },
    { step_number: 4, recipe_id: 2, instructions: 'Add sprinkles if desired' },
    { step_number: 5, recipe_id: 2, instructions: 'Enjoy the awesome dessert!' }
  ]);
};
