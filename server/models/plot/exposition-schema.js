const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let expositionSchema = new Schema({
    content: {
        type: String
    },
}, {
    collection: 'expositions'
    })
module.exports = mongoose.model('Exposition', expositionSchema)