const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model {}

Menu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    prices: {
      type: DataTypes.INTEGER,
      allowNull: false
     }
   
 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'menu',
=======
    modelName: 'Menu',
>>>>>>> 433ad1f4651d8658e6ac06384406788ae64ee44e
  }
);

module.exports = Menu;
