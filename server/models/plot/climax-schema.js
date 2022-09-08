const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let climaxSchema = new Schema({
    content: {
        type: String
    },
},{
    collection: 'climax'
})

module.exports = mongoose.model('Climax', climaxSchema)