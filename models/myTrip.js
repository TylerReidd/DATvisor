const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema ({
    name: String,
    id: String,
    description: String 
})

const myTripSchema = new Schema ({
    location: {type: [locationSchema]},
    preArrival: {type: Schema.Types.ObjectId, ref: 'PreArrival'},
    postArrival: {type: Schema.Types.ObjectId, ref: 'PostArrival'},
    Date: Number
})

module.exports = mongoose.model('MyTrip', myTripSchema, 'MyLocation', locationSchema)
// const myTrip = mongoose.model('MyTrip', myTripSchema, 'MyTrip')
// const myLocation = mongoose.model('MyLocation', locationSchema, 'MyLocation')
