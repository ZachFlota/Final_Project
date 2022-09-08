const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let settingSchema = new Schema({
    name: {
        type: String
    },
    Type: {
        type: String
    },
    Geographic_location: {
        type: String
    },
    Description: {
        type: String
    },
    Time_period: {
        type: String
    },
    Characteristics: {
        type: String
    },
    Weather: {
        type: String
    },
    History: {
        type: String
    },
}, {
        collection: 'settings'
    })
module.exports = mongoose.model('Setting', settingSchema)