const db = require('../../data/db-config');

const findById = async (recipe_id) => {
  const rawRecipeData = await db('recipes as r')
    .leftJoin('steps as s', 'r.recipe_id', '=', 's.recipe_id')
    .leftJoin('ingredients as i', 's.step_id', '=', 'i.step_id')
    .leftJoin('quantities as q', 'i.quantity_id', '=', 'q.quantity_id')
    .leftJoin('units as u', 'q.unit_id', '=', 'u.unit_id')
    .select('r.*', 's.step_id', 's.step_number', 's.instructions', 'i.ingredient_id', 'i.ingredient_name', 'q.quantity', 'u.unit_name')
    .where('r.recipe_id', '=', `${recipe_id}`)
    .orderBy('s.step_number');
  
  const condensedRecipe = await rawRecipeData.reduce((acc, recipe) => {
    const { recipe_id, recipe_name, created_at, step_id, step_number, instructions } = recipe;
    
    const ifIngredients = (recipe) => {
      if (recipe.ingredient_id) {
        return [{
          ingredient_id: recipe.ingredient_id,
          ingredient_name: recipe.ingredient_name,
          quantity: `${recipe.quantity} ${recipe.unit_name}`
        }]
      } else {
        return [];
      }      
    }

    const ingredients = ifIngredients(recipe);

    if (acc[recipe_name]) {
      acc[recipe_name].steps.push({ step_id, step_number, instructions, ingredients });
    } else {
      acc[recipe_name] = {
        recipe_id: recipe_id,
        recipe_name: recipe_name,
        created_at: created_at,
        steps: [{ step_id, step_number, instructions, ingredients }]
      }
    }
    return acc;
  }, {});
  
  const keys = Object.keys(condensedRecipe);

  // const organizedRecipeSteps = condensedRecipe[keys[0]].steps.reduce((acc, step) => {
  //   if (!step_id) {
  //     acc[scheme_name] = {
  //       scheme_id: scheme_id,
  //       scheme_name: scheme_name,
  //       steps: []
  //     }
  //   } else {
  //   }    
  // }
  console.log(rawRecipeData);
  return condensedRecipe;
  // return rawRecipeData;
}

module.exports = { findById }