const mongoose = require("mongoose");
const User = require("./User");


const VideoSchema = new mongoose.Schema({
    cloudinaryLink: {
        type: String,
        required: true,
        unique: true
    },
    emotion: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    },
    uploader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    votes: {
        type: Number,
        default: 0
    },
    inappropriate: {
        type: Number,
        default: 0
    },
    quality: {
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

        },
    }
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
    }
})

module.exports = mongoose.model("Video", VideoSchema);