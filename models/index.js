
const Customer = require('./Customer')
const Menu = require('./Menu');
const Starters = require('./Starters')
// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { Menu, Customer, Starters };

