const MyTrip = require('../models/myTrip')
const PreArrival = require('../models/preArrival');
const PostArrival = require('../models/postArrival')

module.exports = {
    index
}

function index(req, res) {
    function index(req,res) {
        MyTrip.find({addedBy: req.user._id})
        .populate('')
        .then(post => {res.json(post)})
        .catch(err => {res.json(err)})
    }
}