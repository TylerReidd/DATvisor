const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema ({
    name: String,
    id: String,
    description: String 
})

const myTripSchema = new Schema ({
    location: {type: locationSchema},
    Date: Number
})

module.exports = mongoose.model('MyTrip', myTripSchema, locationSchema)