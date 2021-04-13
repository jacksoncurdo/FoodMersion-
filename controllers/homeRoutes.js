const router = require('express').Router();
const { Menu } = require('../models');
const { Starter } = require('../models');
const { Drinks } = require('../models');

router.get('/', async (req, res) => {
res.render('homepage', {

  })});

  router.get("/menu", async (req, res) => {
    try {
      const starterData = await Starter.findAll({
      });
      // res.status(200).json(starterData);
      DrinksData = await Drinks.findAll({
      });
      // res.status(200).json(DrinksData);
      const menuData = await Menu.findAll({
     
      });
   res.status(200).json({menuData,  starterData , DrinksData});
     res.render('menu', {menuData,  starterData , DrinksData} )

     //     )});
    } catch (err) {
      res.status(500).json(err);
    }
  });
// router.get('/menu', async (req, res) => {
//   res.render('menu', {menus} 

//     )});

// router.get('/menu',  (req, res) => {

//     const menuData =  Menu.findAll({

//       include: [
//         {
//           model: Menu,
//           attributes: ['name', 'description', 'prices'],
//         },
//       ],
     
//     })


  
    
//     const menus = menuData.map((menu) =>
//     menu.get({ plain: true })
//   )
  
//     res.render('menu',{ menus})
      
  
 
// });



// router.get('/reservations', async (req, res) => {
//   res.render('reservation', {

//   })
// });

// router.get('/menu', (req, res) => {
//   try {
//     menuData = Menu.findAll({
//       include: [
//         {
//           model: Menu,
//           attributes: ['name', 'description', 'prices'],
//         },
//       ],

//     });

//     const menus = menuData.map((menu) =>
//       menu.get({ plain: true })
//     );

//     res.render('menu', {
//       menus,

//     })

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/menu', (req, res) => {
//   try {
//     starterData = Starter.findAll({
//       include: [
//         {
//           model: Starter,
//           attributes: ['name', 'description', 'prices'],
//         },
//       ],

//     });

//     const starters = starterData.map((starter) =>
//       starter.get({ plain: true })
//     );

//     res.render('menu', {
//       starters,

//     })

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get("/menu", async (req, res) => {
//   try {
//     DrinksData = await Drinks.findAll({
//     });
//     res.status(200).json(DrinksData);
//   } catch (err) {
//     res.status(500).json(err); s
//   }
// });



module.exports = router;