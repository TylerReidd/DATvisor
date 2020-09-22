const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const preSchema = new Schema ({
    toDo: {type: []},
    time: Date,
    done: Boolean
}, {timestamps: true})

module.exports = mongoose.model('PreArrival', preSchema)