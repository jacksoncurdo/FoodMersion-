const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const menuRoutes = require('./menuRoutes');

router.use('/Customer', customerRoutes);
router.use('/Menu', menuRoutes);

module.exports = router;
