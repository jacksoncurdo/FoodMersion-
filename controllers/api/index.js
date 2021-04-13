const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const menuRoutes = require('./menuRoutes');
const starterRoutes = require('./starterRoutes');
const drinksRoutes = require('./drinksRoutes');

router.use('/reservations', customerRoutes);
router.use('/menu', menuRoutes);
router.use('/menu', menuRoutes);
router.use('/menu', menuRoutes);

module.exports = router;
