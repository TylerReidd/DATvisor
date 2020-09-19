const router = require('express').Router()
const postCtrl = require('../controllers/post')


//public routes



//protected routes
router.use(require('../config/auth'));
router.get('/', checkAuth, postCtrl.index)
router.post('/', checkAuth, postCtrl.create)



function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router