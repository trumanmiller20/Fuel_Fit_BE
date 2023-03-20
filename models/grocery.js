'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Grocery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Grocery.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      calories: DataTypes.INTEGER,
      fat: DataTypes.INTEGER,
      protein: DataTypes.INTEGER,
      carbs: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Grocery',
      tableName: 'groceries'
    }
  )
  return Grocery
}
