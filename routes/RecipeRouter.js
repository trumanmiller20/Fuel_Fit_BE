const Router = require('express').Router()
const controller = require('../controllers/RecipeController')
const middleware = require('../middleware')

Router.get('/:user_id', controller.GetRecipesByUser)
Router.get('/:user_id/:recipe_id', controller.GetUserRecipe)

Router.post(
  '/:user_id/add-recipe',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AddUserRecipe
)

Router.delete(
  '/:user_id/:recipe_id/delete-recipe',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUserRecipe
)

module.exports = Router
