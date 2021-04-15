const router = require('express').Router();
const { Menu } = require('../models');
const { Starter } = require('../models');
const { Drinks } = require('../models');

router.get('/', async (req, res) => {
res.render('homepage', {

  })});
  router.get('/menu', async (req, res) => {
  //   fetch('/api/menu')
  // .then(response => {
  //   console.log(response.json())
  //   response.json()})
  // .then(data => res.render('menu', (data))
  try {
    const starterData = await Starter.findAll({
      // include: [
      //           {
      //             model: Starter,
      //             attributes: ['name', 'description', 'prices'],
      //           },
      //         ],
    });
   
    // res.status(200).json(starterData);
    DrinksData = await Drinks.findAll({
      // include: [
      //           {
      //             model: Drinks,
      //             attributes: ['name', 'description', 'prices'],
      //           },
      //         ],
    });
   
    // res.status(200).json(DrinksData);
    const menuData = await Menu.findAll({
      // include: [
      //           {
      //             model: Menu,
      //             attributes: ['name', 'description', 'prices'],
      //           },
      //         ],
   
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

router.get('/reservations', async (req, res) => {
  res.render('reservations', {
    
    })});

//   router.get("/menu", async (req, res) => {
//     try {
//       const starterData = await Starter.findAll({
//         // include: [
//         //           {
//         //             model: Starter,
//         //             attributes: ['name', 'description', 'prices'],
//         //           },
//         //         ],
//       });
     
//       // res.status(200).json(starterData);
//       DrinksData = await Drinks.findAll({
//         // include: [
//         //           {
//         //             model: Drinks,
//         //             attributes: ['name', 'description', 'prices'],
//         //           },
//         //         ],
//       });
     
//       // res.status(200).json(DrinksData);
//       const menuData = await Menu.findAll({
//         // include: [
//         //           {
//         //             model: Menu,
//         //             attributes: ['name', 'description', 'prices'],
//         //           },
//         //         ],
     
//       });
//     //  let menus = menuData.map((project) => project.get({ plain: true }));
//     //   menus += starterData.map((project) => project.get({ plain: true }));
//     //    menus += DrinksData.map((project) => project.get({ plain: true }));
//   var menu = res.status(200).json({menuData,  starterData , DrinksData});
//  var menus = menu.map((project) => project.get({ plain: true }));
//    res.render('menu', menus )

//          }
//      catch (err) {
//       res.status(500).json(err);
//     }
//   });

// router.get("/menu", async (req, res) => {
// const response = await fetch(`/api/menu`, {
//   method: 'GET',
//   body: JSON.stringify({name,  prices, description }),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// if (response.ok) {
   
//     res.render('menu' ,)
// } else {
//   alert('Failed to create project');
// }
// });




module.exports = router;
