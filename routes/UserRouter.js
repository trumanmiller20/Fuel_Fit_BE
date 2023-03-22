const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllUsers)
Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
Router.get('/details/:user_id', controller.GetUserDetails)
Router.post('/register', controller.RegisterUser)
Router.post('/login', controller.LoginUser)
Router.put(
  '/update_password/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
Router.put(
  '/update/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUser
)
Router.delete(
  '/delete/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUser
)

module.exports = Router
