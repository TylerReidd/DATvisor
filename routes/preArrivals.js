const router = require('express').Router();
const preCtrl = require('../controllers/preArrival');

// Public Routes

// Protected Routes
router.use(require('../config/auth'));
router.get('/', checkAuth, preCtrl.index);
router.post('/', checkAuth, preCtrl.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

  module.exports = router;