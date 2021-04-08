const sequelize = require('../config/connection');
const { Menu, Customer, Starters } = require('../models');

const menuData = require('./menuData.json');
const customerData = require('./customerData.json');
const startersData = require('./startersData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const customers = await Customer.bulkCreate(customerData, {
    individualHooks: true,
    returning: true,
  });

  const menu = await Menu.bulkCreate(menuData, {
    individualHooks: true,
    returning: true,
  });

  const starters = await Starters.bulkCreate(startersData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
