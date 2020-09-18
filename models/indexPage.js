const mongoose = require('mongoose')
const Schema = mongoose.Schema

const indexSchema = new Schema ({
    title: String,
    Question: String,
    myTrips: {type: [], ref: 'User'}
});

module.exports = mongoose.model('Index', indexSchema)