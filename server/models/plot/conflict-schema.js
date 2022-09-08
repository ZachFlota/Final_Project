const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let conflictSchema = new Schema({
    content: {
        type: String 
    },
}, {
    collection: 'conflicts'
})
module.exports = mongoose.model('Conflict', conflictSchema)