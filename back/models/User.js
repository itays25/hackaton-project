const mongoose = require("mongoose");
const Review = require('./Review');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    token:{
        type: String,
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

module.exports = mongoose.model('User', userSchema)