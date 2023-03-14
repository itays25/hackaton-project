const Emotion = require('../models/Emotion');


module.exports.getAll = (req, res) => {
    Emotion.find()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error =>
            res.status(500).json({ message: "errorrrr:", error }))
};

//////////////////////////////-----------------CREATE--------------------///////////////////--------
module.exports.createSpectrum = (req, res) => {
    const newEmotion = new Emotion(req.body);
    newEmotion.save((error, emotion) => {
        if (error) {
            res.status(500).json({
                message: "error:", error
            })
        } else {
            res.status(200).json({
                message: "Emotion created successfully", emotion
            })
        }
    })
};

module.exports.addEmotion = (req, res) => {
    if (req.body.emotion) {
        Emotion.updateOne({ _id: req.params.spectrumId }, {
            $push: {
                stock: {
                    "title": req.body.emotion,
                    "content": []
                }
            }
        })
            .then(response => {
                res.status(200).json({
                    message: "Emotion added successfully", response
                })
            })
            .catch(err => res.status(500).json({
                message: "something is wrong", err
            }))
    }
    else {
        res.status(500).json({ message: "send an emotion:", error })
    }
};

//////////////////////////////-----------DELETE-------------------//////////////////////--------------------
module.exports.deleteSpectrum = (req, res) => {
    Emotion.findByIdAndDelete(req.params.spectrumId)
        .then(response => {
            if (!response) {
                res.status(404).json({ message: "spectrum not found" });
            } else {
                res.status(200).json({ message: "spectrum deleted successfully", response });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: "failed to delete spectrum" });
        });
};

module.exports.deleteEmotion = (req, res) => {
    const { spectrumId, emotionId } = req.body
    Emotion.findOneAndUpdate(  { _id: spectrumId },
        { $pull: { stock: { _id: emotionId } } })
        .then((response) => {
            if (!response) {
                res.status(404).json({ message: 'Spectrum not found' });
            } else {
                res.status(200).json({
                    message: 'Emotion deleted successfully',
                    updatedSpectrum: response,
                });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Failed to delete Emotion', err });
        });
};


//////////////////////////////////---------------UPDATE---------------////////////-------------------------
module.exports.updateSpectrum = (req, res) => {
    const { spectrum, color, emotion, need } = req.body
    Emotion.findByIdAndUpdate(req.params.spectrumId, {
        spectrum: spectrum,
        color: color
    },
        { new: true })
        .then((response) => {
            if (!response) {
                res.status(404).json({ message: 'Spectrum not found' });
            } else {
                res.status(200).json({
                    message: 'Spectrum updated successfully',
                    response
                });
            }
        })
        .catch(err =>
            res.status(500).json({
                message: "coudn't update spectrum", err
            }))
}

module.exports.updateEmotion = async (req, res) => {
    const { emotion, need, emotionId, spectrumId } = req.body;

    await Emotion.findOneAndUpdate({ "_id": spectrumId, "stock._id": emotionId }, {
        $set: {
            'stock.$.title': emotion,
            'stock.$.need': need
        }
    }, { new: true })
        .then((response) => {
            if (!response) {
                res.status(404).json({ message: 'Emotion not found' });
            } else {
                res.status(200).json({
                    message: 'Emotion updated successfully',
                    response
                });
            }
        })
        .catch(err =>
            res.status(500).json({
                message: "coudn't update Emotion", err
            }))
};


// db.coll.update({"_id": 1}, {"year": 2016}) // WARNING! Replaces the entire document
// db.coll.update({"_id": 1}, {$set: {"year": 2016, name: "Max"}})
// db.coll.update({"_id": 1}, {$unset: {"year": 1}})
// db.coll.update({"_id": 1}, {$rename: {"year": "date"} })
// db.coll.update({"_id": 1}, {$inc: {"year": 5}})
// db.coll.update({"_id": 1}, {$mul: {price: NumberDecimal("1.25"), qty: 2}})
// db.coll.update({"_id": 1}, {$min: {"imdb": 5}})
// db.coll.update({"_id": 1}, {$max: {"imdb": 8}})
// db.coll.update({"_id": 1}, {$currentDate: {"lastModified": true}})
// db.coll.update({"_id": 1}, {$currentDate: {"lastModified": {$type: "timestamp"}}})

// Array
// db.coll.update({ "_id": 1 }, { $push: { "array": 1 } })
// db.coll.update({ "_id": 1 }, { $pull: { "array": 1 } })
// db.coll.update({ "_id": 1 }, { $addToSet: { "array": 2 } })
// db.coll.update({ "_id": 1 }, { $pop: { "array": 1 } })  // last element
// db.coll.update({ "_id": 1 }, { $pop: { "array": -1 } }) // first element
// db.coll.update({ "_id": 1 }, { $pullAll: { "array": [3, 4, 5] } })
// db.coll.update({ "_id": 1 }, { $push: { scores: { $each: [90, 92, 85] } } })
// db.coll.updateOne({ "_id": 1, "grades": 80 }, { $set: { "grades.$": 82 } })
// db.coll.updateMany({}, { $inc: { "grades.$[]": 10 } })
// db.coll.update({}, { $set: { "grades.$[element]": 100 } }, { multi: true, arrayFilters: [{ "element": { $gte: 100 } }] })

// // Update many
// db.coll.update({"year": 1999}, {$set: {"decade": "90's"}}, {"multi":true})
// db.coll.updateMany({"year": 1999}, {$set: {"decade": "90's"}})

// // FindOneAndUpdate
// db.coll.findOneAndUpdate({"name": "Max"}, {$inc: {"points": 5}}, {returnNewDocument: true})

// // Upsert
// db.coll.update({"_id": 1}, {$set: {item: "apple"}, $setOnInsert: {defaultQty: 100}}, {upsert: true})

// // Replace
// db.coll.replaceOne({"name": "Max"}, {"firstname": "Maxime", "surname": "Beugnet"})

// // Save
// db.coll.save({"item": "book", "qty": 40})

// // Write concern
// db.coll.update({}, {$set: {"x": 1}}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})