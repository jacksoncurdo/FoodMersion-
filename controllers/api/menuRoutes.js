const router = require('express').Router();
const { Menu } = require('../../models');

router.get()

router.post('/', async (req, res) => {

  const menuData = await Menu.create(req.body)

  res.status(200).json(menuData);


});


  router.post('/login', async (req, res) => {
    try {
      const menuData = await Menu.findOne({ where: { email: req.body.email } });

      if (!menuData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }

      const validPassword = await menuData.checkPassword(req.body.password);

      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }

      req.session.save(() => {
        req.session.user_id = menuData.id;
        req.session.logged_in = true;

        res.json({ user: menuData, message: 'You are now logged in!' });
      });

    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
