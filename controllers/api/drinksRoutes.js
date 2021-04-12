const router = require('express').Router();
const { Drinks } = require('../../models');
const withAuth = require('../../utils/auth');

router.get("/", async (req, res) => {
  try {
    DrinksData = await Drinks.findAll({
    });
    res.status(200).json(DrinksData);
  } catch (err) {
    res.status(500).json(err);s
  }
});


router.post('/', async (req, res) => {
  try {
    const newDrinks = await Drinks.create({
      ...req.body,
      // id: req.session.id,
    });

    res.status(200).json(newDrinks);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const DrinksData = await Drinks.destroy({
      where: {
        id: req.params.id,
        // id: req.session.id,
      },
    });

    if (!DrinksData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(DrinksData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;