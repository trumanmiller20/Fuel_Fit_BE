const { Recipe } = require('../models')

const AddUserRecipe = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let recipeBody = {
      user_id: userId,
      ...req.body
    }
    let recipe = await Recipe.create(recipeBody)
    res.send(recipe)
  } catch (error) {
    throw error
  }
}

const GetRecipesByUser = async (req, res) => {
  try {
    const userRecipes = await Recipe.findAll({
      where: { user_id: req.params.user_id }
    })
    res.send(userRecipes)
  } catch (error) {
    throw error
  }
}

const GetUserRecipe = async (req, res) => {
  try {
    let recipeId = parseInt(req.params.recipe_id)
    let userId = parseInt(req.params.user_id)
    const userRecipe = await Recipe.findOne({
      where: [{ id: recipeId }, { user_id: userId }]
    })
    res.send(userRecipe)
  } catch (error) {
    throw error
  }
}

const DeleteUserRecipe = async (req, res) => {
  try {
    let recipeId = parseInt(req.params.recipe_id)
    let userId = parseInt(req.params.user_id)
    await Recipe.destroy({ where: [{ id: recipeId }, { user_id: userId }] })
    res.send({ message: `Deleted recipe with ID number of ${recipeId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  AddUserRecipe,
  GetRecipesByUser,
  DeleteUserRecipe,
  GetUserRecipe
}
