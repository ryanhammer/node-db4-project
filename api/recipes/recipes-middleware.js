const Recipes = require('./recipes-model');

const checkRecipeId = async (req, res, next) => {
  const id = req.params.id;
  try {
    const recipe = await Recipes.findById(id);
    if (!recipe) {
      res.status(404).json({
        message: `recipe with recipe_id ${id} is not found`
      });
    } else {
      req.recipe = recipe;
      next();
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}

module.exports = { checkRecipeId }