const mongoose = require('mongoose')

const authorSchemea = new mongoose.Schema({
    name: {
        type : String , 
        required : true 
    }
})

module.exports = mongoose.model('Author', authorSchemea)
