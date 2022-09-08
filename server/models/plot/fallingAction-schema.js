const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let fallingActionSchema = new Schema({
    content: {
        type: String
    },
}, {
    collection: 'fallingActions'
})
module.exports = mongoose.model('FallingAction', fallingActionSchema)