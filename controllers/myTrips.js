const MyTrip = require('../models/myTrip')
const PreArrival = require('../models/preArrival');
const PostArrival = require('../models/postArrival')

module.exports = {
    index,
    create
}

function create(req, res) {
    req.body.addedBy = req.user._id
    req.body.location = req.body.location.split(',')
    MyTrip.create(req.body)
    .then(myTrip => {res.json(myTrip)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    MyTrip.find({addedBy: req.user._id})
    .populate('')
    .then(post => {res.json(post)})
    .catch(err => {res.json(err)})
}
