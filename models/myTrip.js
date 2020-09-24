const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const locationSchema = new Schema ({
//     nameOfTrip: String,
//     location: String,
//     departs: Date,
// })

const myTripSchema = new Schema ({
    nameOfTrip: [String],
    location: [String],
    departs: [String],
    preArrival: {type: Schema.Types.ObjectId, ref: 'PreArrival'},
    postArrival: {type: Schema.Types.ObjectId, ref: 'PostArrival'},
    Date: Number
})

module.exports = mongoose.model('MyTrip', myTripSchema)
// const myTrip = mongoose.model('MyTrip', myTripSchema, 'MyTrip')
// const myLocation = mongoose.model('MyLocation', locationSchema, 'MyLocation')
