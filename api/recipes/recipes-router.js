const express = require('express');
const { checkRecipeId } = require('./recipe-middleware');
const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/:recipe_id', checkRecipeId, (req, res, next) => {
  const { recipe_id } = req.params;

  Recipes.findById(recipe_id)
    .then(recipe => {
      res.json(recipe)
    })
    .catch(next)
})

router.use( (err, req, res ) => {
  res.status(err.status || 500).json({
    note: "Something went wrong in the recipes router",
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;