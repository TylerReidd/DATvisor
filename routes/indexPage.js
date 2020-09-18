const router = require('express').Router();
const indexCtrl = require('../controllers/index');

// public routes


// protected routes
router.use(require('../config/auth'));
router.get('/', checkAuth, indexCtrl.index);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

  module.exports = router;