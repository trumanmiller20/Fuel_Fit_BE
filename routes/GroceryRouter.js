const Router = require('express').Router()
const controller = require('../controllers/GroceryController')
const middleware = require('../middleware')

Router.get('/:user_id/groceries', controller.GetGroceriesByUser)
Router.post(
  '/:user_id/add-grocery-item',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AddUserGroceryItem
)

Router.delete(
  '/:user_id/:item_id/delete-grocery-item',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUserGroceryItem
)

module.exports = Router
