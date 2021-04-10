const router = require('express').Router();
const { Customer } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newCustomer = await Customer.create({
      ...req.body,
      // id: req.session.id,
    });

    res.status(200).json(newCustomer);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const customerData = await Customer.destroy({
      where: {
        id: req.params.id,
        // id: req.session.id,
      },
    });

    if (!customerData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(customerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
