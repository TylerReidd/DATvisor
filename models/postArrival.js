const mongoose = require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema ({
    toDo: {type: []},
    time: Date,
    addedBy: {type: Schema.Types.ObjectId, ref: 'User'},
    myTrip: {type: Schema.Types.ObjectId, ref: 'MyTrip'}
})

module.exports = mongoose.model('PostArrival', postSchema)