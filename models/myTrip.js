const mongoose = require('mongoose')
const Schema = mongoose.Schema




const postSchema = new Schema ({
    activity: {type: []},
    toDo: [],
    time: Date,
    done: Boolean,
    myTrip: {type: Schema.Types.ObjectId, ref: 'MyTrip'}
}, {timestamps: true})

module.exports = mongoose.model('PostArrival', postSchema)