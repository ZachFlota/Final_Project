const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let characterSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
        collection: 'users'
    })
module.exports = mongoose.model('Character', characterSchema)