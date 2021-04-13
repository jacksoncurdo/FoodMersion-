const router = require('express').Router();

router.get('/menu', async (req, res) => {
  res.render('menu', {
  
    })});

   
router.get('/', async (req, res) => {
res.render('homepage', {

  })});

  // router.get('/', async (req, res) => {
  //   try {
  // menuData = await Menu.findAll({
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
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
  // });

module.exports = router; 