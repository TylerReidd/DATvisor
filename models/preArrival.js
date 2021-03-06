const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const preSchema = new Schema ({
    toDo: {type: []},
    time: Date,
    done: Boolean,
    addedBy: {type: Schema.Types.ObjectId, ref: 'User'},
    myTrip: {type: Schema.Types.ObjectId, ref: 'MyTrip'}
}, {timestamps: true})

module.exports = mongoose.model('PreArrival', preSchema)