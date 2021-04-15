const router = require('express').Router();
const { Menu } = require('../models');
const { Starter } = require('../models');
const { Drinks } = require('../models');

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
 
  
    
    

 router.get("/menu", async (req, res) => {
  const response = await fetch(`/api/menu`, {
    method: 'GET',
    body: JSON.stringify({name,  prices, description }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
     
      res.render('menu' , response)
  } else {
    alert('Failed to create project');
  }
});






module.exports = router;
