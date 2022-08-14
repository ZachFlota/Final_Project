const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let characterSchema = new Schema({
    name: {
        type: String
    },
    Bio: {
        type: String
    },
    Age: {
        type: Number
    },
    Appearance: {
        type: String
    },
    Personality: {
        type: String
    },
    Attributes: {
        type: String
    },
    Habbits: {
        type: String
    },
}, {
        collection: 'characters'
    })
module.exports = mongoose.model('Character', characterSchema)