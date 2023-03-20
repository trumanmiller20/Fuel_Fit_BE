const { Grocery } = require('../models')

const AddGroceryItem = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let itemBody = {
      user_id: userId,
      ...req.body
    }
    let groceryItem = await Grocery.create(itemBody)
    res.send(groceryItem)
  } catch (error) {
    throw error
  }
}

const GetGroceriesByUser = async (req, res) => {
  try {
    const userGroceries = await Grocery.findAll({
      where: { user_id: req.params.user_id }
    })
    res.send(userGroceries)
  } catch (error) {
    throw error
  }
}

const DeleteGroceryItem = async (req, res) => {
  try {
    let itemId = parseInt(req.params.item_id)
    let userId = parseInt(req.params.user_id)
    await Grocery.destroy({ where: [{ id: itemId }, { user_id: userId }] })
    res.send({ message: `Deleted grocery item with ID number of ${itemId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  AddGroceryItem,
  GetGroceriesByUser,
  DeleteGroceryItem
}
