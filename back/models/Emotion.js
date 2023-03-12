const mongoose = require('mongoose');
const Video = require('./Video');


const EmotionSchema = new mongoose.Schema({
    spectrum: {
        type: String,
        required: true
    },
    color: {
        type: String
    },
    stock: [{
        title: {
            type: String,
        },
        need: {
            type: Boolean,
            default : true
        },
        content: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video'
        }]
    }]
});

module.exports = mongoose.model("Emotion", EmotionSchema);


