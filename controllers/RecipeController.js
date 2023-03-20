const { Recipe } = require('../models')

const AddRecipe = async (req, res) => {
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

const DeleteRecipe = async (req, res) => {
  try {
    let recipeId = parseInt(req.params.recipe_id)
    let userId = parseInt(req.params.user_id)
    await Recipe.destroy({ where: [{ id: recipeId }, { user_id: userId }] })
    res.send({ message: `Deleted recipe with ID number of ${itemId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  AddRecipe,
  GetRecipesByUser,
  DeleteRecipe
}
