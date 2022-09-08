const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let resolutionSchema = new Schema({
    content: {
        type: String 
    },
}, {
    collection: 'resolutions'
})
module.exports = mongoose.model('Resolution', resolutionSchema)