const Emotion = require('../models/Emotion');

module.exports.create = (req, res) => {
    const newEmotion = new Emotion(req.body);
    newEmotion.save((error, emotion) => {
        if (error) {
            res.status(500).json({ message: "error:", error })
        } else {
            res.status(200).json({ message: "Emotion created successfully", emotion })
        }
    })
};

// all emotions from all of the documents of collection
module.exports.getAll = (req, res) => {
    const list = [];
    Emotion.aggregate([{ $project: { 'stock.title': 1, 'stock._id': 1 } }])
        .then(response => {
            response.forEach((item) => {
                item.stock.forEach((stock) => {
                    list.push({ title: stock.title, _id: stock._id });
                });
            });
            res.status(200).json(list)
        })
        .catch(error => res.status(500).json({ message: "error:", error }))
};

module.exports