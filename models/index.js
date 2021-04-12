
const Customer = require('./Customer')
const Menu = require('./Menu');
const Starter = require('./Starter');
const Drinks = require('./Drinks');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { Menu, Customer, Starter, Drinks };

