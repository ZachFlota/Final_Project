const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let conflictSchema = new Schema({
    type: {
        type: String
    },
    content: {
        type: String 
    },
}, {
    collection: 'conflicts'
})
module.exports = mongoose.model('Conflict', conflictSchema)