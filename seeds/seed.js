const sequelize = require('../config/connection');
const { Menu, Customer, Starter, Drinks, User} = require('../models');

const menuData = require('./menuData.json');
const customerData = require('./customerData.json');
const starterData = require('./starterData.json');
const drinksData = require('./drinksData.json');
const userData = require('./userData.json');


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
  const Starters = await Starter.bulkCreate(starterData, {
    individualHooks: true,
    returning: true,
  });
  const Drink = await Drinks.bulkCreate(drinksData, {
    individualHooks: true,
    returning: true,
  });
  const Users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
