const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Starter extends Model {}

Starter.init(
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
     },
     category_name: {
      type: DataTypes.STRING,
     }
 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Starter',
  }
);

module.exports = Starter;
