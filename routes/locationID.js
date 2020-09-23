const express = require('express');
const router = express.Router();
const locationIDCtrl = require('../controllers/locationID');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.post('/', locationIDCtrl.getAttractionsForLocationName);


/*---------- Auth Checker ----------*/

module.exports = router;
