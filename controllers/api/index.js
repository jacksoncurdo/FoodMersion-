const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const menuRoutes = require('./menuRoutes');
const starterRoutes = require('./starterRoutes');
const drinksRoutes = require('./drinksRoutes');

router.use('/Customer', customerRoutes);
router.use('/Starter', starterRoutes);
router.use('/Menu', menuRoutes);
router.use('/Drinks', drinksRoutes);

module.exports = router;
