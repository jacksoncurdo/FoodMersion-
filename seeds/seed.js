const sequelize = require('../config/connection');
const { Menu, Customer } = require('../models');

const menuData = require('./menuData.json');
const customerData = require('./customerData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const Customers = await Customer.bulkCreate(customerData, {
    individualHooks: true,
    returning: true,
  });

  const Menus = await Menu.bulkCreate(menuData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
