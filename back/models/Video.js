const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://emotiplay:emotiplay@cluster0.mqbcnqd.mongodb.net/test', {})

const videoSchema = new mongoose.Schema({
    cloudinaryLink: {
        type: String,
        required: true,
        unique: true

    },
    emotion: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    quality:  {
        type: Object,
         1: {
            type: Number,
            default: 0
        }
        ,
        2: {
            type: Number,
            default: 0

        },
        3: {
            type: Number,
            default: 0

        },
        4: {
            type: Number,
            default: 0

        },
        5: {
            type: Number,
            default: 0

        },}
    ,
    validation: {
        type: Object,
        randomAnswer: {
            type: Number,
            default: 0

        },
        correctAnswer: {
            type: Number,
            default: 0

        },
        similliarAnswer: {
            type: Number,
            default: 0

        }
    },
    isAppropriate: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Video", videoSchema);