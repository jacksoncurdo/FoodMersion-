const router = require('express').Router();
const { Menu } = require('../models');
const { Starter } = require('../models');
const { Drinks } = require('../models');
const { Customer } = require('../models');

router.get('/', async (req, res) => {
res.render('homepage', {

  })});
  router.get('/menu', async (req, res) => {

  try {
    const starterData = await Starter.findAll({
  
    });
   

    DrinksData = await Drinks.findAll({
   
    });
   
  
    const menuData = await Menu.findAll({
     
   
    });
   let menus = menuData.map((project) => project.get({ plain: true }));
   console.log(menus);
    let starters = starterData.map((project) => project.get({ plain: true }));
  let drinks = DrinksData.map((project) => project.get({ plain: true }));
res.render('menu',{ menus, starters, drinks});
  } catch (err){throw err}
});
 
  
router.get('/info', async (req, res) => {

  try {
    const customerData = await Customer.findAll({
  
    });
    let customers = customerData.map((project) => project.get({ plain: true }));
    console.log(customers)
    res.render('info',{customers});
  } catch (err){throw err}
});


 

router.get('/reservations', async (req, res) => {
  res.render('reservations', {
    
    })});

    router.get('/login', async (req, res) => {
      res.render('login', {
        
        })});



module.exports = router;
