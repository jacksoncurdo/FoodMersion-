const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const menuRoutes = require('./menuRoutes');
const userRoutes = require('./userRoutes');


router.use('/reservations', customerRoutes);
router.use('/menu', menuRoutes);
router.use('/menu', userRoutes);


module.exports = router;
