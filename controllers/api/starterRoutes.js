const router = require('express').Router();
const { Starter } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get("/", async (req, res) => {
//   res.render('menu', {
//   })});

// router.get("/", async (req, res) => {
//   try {
//     const starterData = await Starter.findAll({
//     });
//     res.status(200).json(starterData);
//   } catch (err) {
//     res.status(500).json(err);s
//   }
// });


router.post('/', async (req, res) => {
  try {
    const newStarter = await Starter.create({
      ...req.body,
      // id: req.session.id,
    });

    res.status(200).json(newStarter);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const starterData = await Starter.destroy({
      where: {
        id: req.params.id,
        // id: req.session.id,
      },
    });

    if (!starterData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(starterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
