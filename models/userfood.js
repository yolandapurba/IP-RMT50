'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserFood.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNull: {
          msg: "UserId is required"
        },
        notEmpty: {
          msg: "UserId is required"
        }
      }
    },
    FoodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNull: {
          msg: "FoodId is required"
        },
        notEmpty: {
          msg: "FoodId is required"
        }
      }
    },
    bill: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNull: {
          msg: "Bill is required"
        },
        notEmpty: {
          msg: "Bill is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'UserFood',
  });
  return UserFood;
};