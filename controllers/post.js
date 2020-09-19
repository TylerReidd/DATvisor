const PostArrival = require("../models/postPage");


module.exports = {
    index,
    create,
}

function create(req,res) {
    req.body.toDo = req.body.toDo.split(',');
    PostArrival.create(req.body)
    .then(post => {res.json(post)})
    .catch(err => {res.json(err)})
}

function index(req,res) {
    PostArrival.find({})
    .populate('')
    .then(post => {res.json(post)})
    .catch(err => {res.json(err)})
}