const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let risingActionSchema = new Schema({
    content: {
        type: String 
    },
}, {
    collection: 'risingActions'
})
module.exports = mongoose.model('RisingAction', risingActionSchema)