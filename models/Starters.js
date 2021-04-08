const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Starters extends Model {}

Starters.init(
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
    modelName: 'Starters',
  }
);

module.exports = Starters;
