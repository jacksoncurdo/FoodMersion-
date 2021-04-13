const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const menuRoutes = require('./menuRoutes');
const starterRoutes = require('./starterRoutes');
const drinksRoutes = require('./drinksRoutes');

router.use('/reservation', customerRoutes);
router.use('/menu', starterRoutes);
router.use('/menu', menuRoutes);
router.use('/menu', drinksRoutes);

module.exports = router;
