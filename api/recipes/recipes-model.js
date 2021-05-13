const db = require('../../data/db-config');

const findById = async (recipe_id) => {
  const rawRecipeData = await db('recipes as r')
    .leftJoin('steps as s', 'r.recipe_id', '=', 's.recipe_id')
    .leftJoin('ingredients as i', 's.step_id', '=', 'i.step_id')
    .leftJoin('quantities as q', 'i.quantity_id', '=', 'q.quantity_id')
    .leftJoin('units as u', 'q.unit_id', '=', 'u.unit_id')
    .select('r*, s.step_id, s.step_number, s.step_instructions')
    .where('r.recipe_id', '=', `${recipe_id}`)
    .orderBy('s.step_number');
  
  // const organizedSchemes = rawSchemeData.reduce((acc, scheme) => {
  //   const { instructions, scheme_name, step_id, step_number } = scheme;
  //   if (acc[scheme_name]) {
  //     acc[scheme_name].steps.push({ step_id, step_number, instructions });
  //   } else {
  //     if (!step_id) {
  //       acc[scheme_name] = {
  //         scheme_id: scheme_id,
  //         scheme_name: scheme_name,
  //         steps: []
  //       }
  //     } else {
  //         acc[scheme_name] = {
  //           scheme_id: scheme_id,
  //           scheme_name: scheme_name,
  //           steps: [{ step_id, step_number, instructions }]
  //         }
  //     }
  //   }
  //   return acc[scheme_name];
  // }, {});
    
  return rawRecipeData;
}

module.exports = { findById }