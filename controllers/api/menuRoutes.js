const router = require('express').Router();
const { Menu } = require('../../models');



router.get("/", async (req, res) => {
  res.render('menu', {
  })});

router.get("/", async (req, res) => {
  try {

    const menuData = await Menu.findAll({
   
    });
    
    res.status(200).json(menuData);
  } catch (err) {
    res.status(500).json(err);s
  }
});


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
