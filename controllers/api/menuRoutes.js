const router = require('express').Router();
const { Menu, Starter, Drinks } = require('../../models');

router.get("/", async (req, res) => {
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
  //  let menus = menuData.map((project) => project.get({ plain: true }));
  //   menus += starterData.map((project) => project.get({ plain: true }));
  //    menus += DrinksData.map((project) => project.get({ plain: true }));
res.status(200).json({menuData,  starterData , DrinksData});
// var menus = menu.map((project) => project.get({ plain: true }));
// res.json(menus);
 res.render('menu', menus )

       }
   catch (err) {
    res.status(500).json(err);
  }
});
// router.get("/", async (req, res) => {
//   try {
//     DrinksData = await Drinks.findAll({
//     });
//     res.status(200).json(DrinksData);
//   } catch (err) {
//     res.status(500).json(err);s
//   }
// });

// router.get("/", async (req, res) => {
//   res.render('menu', menus )
// });

//   router.get('/', async (req, res) => {
//     const menus = await Menu.findAll().catch((err) => { 
//         res.json(err);
//       });
//         const menuData = menus.map((menu) => menu.get({ plain: true }));
//         res.render('all', { menuData });
//       });

      // router.get('/', async (req, res) => {
      //   try {
      // menuData = await Menu.findAll({
      //       include: [
      //         {
      //           model: Menu,
      //           // attributes: ['filename', 'description'],
      //         },
      //       ],
           
      //     });
      //     res.status(200).json(menuData)
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
//    router.get("/", async (req, res) => {
//   try {

//     const menuData = await Menu.findAll({
   
//     });
//     // res.render('menu', menuData )
//     res.status(200).json(menuData);
  
//   } catch (err) {
//     res.status(500).json(err);s
//   }
  
// });


router.post('/', async (req, res) => {

  const menuData = await Menu.create(req.body)

  res.status(200).json(menuData);


});


router.delete('/:id', async (req, res) => {
  try {
    const menuData = await Menu.destroy({
      where: {
        id: req.params.id,
        // id: req.session.id,
      },
    });

    if (!menuData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(menuData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
