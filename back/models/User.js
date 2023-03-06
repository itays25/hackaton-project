const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://emotiplay:emotiplay@cluster0.mqbcnqd.mongodb.net/test',{})


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