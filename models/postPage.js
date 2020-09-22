const mongoose = require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema ({
    activity: {type: []},
    toDo: [],
    time: Date,
    done: Boolean,
}, {timestamps: true})

module.exports = mongoose.model('PostArrival', postSchema)