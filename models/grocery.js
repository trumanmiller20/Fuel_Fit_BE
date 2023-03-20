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
      name: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      calories: {
        type: DataTypes.INTEGER
      },
      fat: {
        type: DataTypes.INTEGER
      },
      protein: {
        type: DataTypes.INTEGER
      },
      carbs: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'Grocery',
      tableName: 'groceries'
    }
  )
  return Grocery
}
