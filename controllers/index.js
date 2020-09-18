const indexPage = require("../models/indexPage");

module.exports = {
  index,
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}