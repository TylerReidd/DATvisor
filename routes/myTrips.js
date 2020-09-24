const router = require('express').Router()
const myTripsCtrl = require('../controllers/myTrips')

// public routes

// protected routes
router.use(require('../config/auth'));
router.get('/', checkAuth, myTripsCtrl.index)
router.post('/', checkAuth, myTripsCtrl.create)


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;