const PreArrival = require('../models/preArrival')

module.exports = {
    index,
    create
};

function create(req, res) {
    req.body.toDo = req.body.toDo.split(',')
    PreArrival.create(req.body)
    .then(preArrival => {res.json(preArrival)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    PreArrival.find({})
    .populate('addedBy')
    .then((pre) => res.json(pre))
    .catch(err => {res.json(err)})
  }