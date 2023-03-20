const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const GroceryRouter = require('./GroceryRouter')
const RecipeRouter = require('./RecipeRouter')

Router.use('/user', UserRouter)
Router.use('/grocery', GroceryRouter)
Router.use('/recipe', RecipeRouter)

module.exports = Router
