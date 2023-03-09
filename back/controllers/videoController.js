const Video = require('../models/Video');
const Emotion = require('../models/Emotion');
const { default: mongoose } = require('mongoose');


module.exports.addVideo = async (req, res) => {
  const { emotionId, cloudinaryLink, emotion } = req.body;

  try {
    const feeling = await Emotion.findOne({ 'stock._id': emotionId });
    if (!feeling) {
      return res.status(404).json({ message: 'Emotion not found' });
    }

    const matchingStock = feeling.stock.find((stock) => String(stock._id) === emotionId);
    if (!matchingStock) {
      return res.status(404).json({ message: 'Stock not found' });
    }

    const video = new Video({ cloudinaryLink, emotion });
    await video.save();

    matchingStock.content.push(video._id);
    await feeling.save();

    res.status(200).json({ message: 'Video added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports.allVideos = (req, res) => {
  Video.find({ votes: { $lte: 50 } })
    .sort({ votes: -1 })
    .then((data) => {
      if (data) {
        res.status(200).json(data)
      }
      else {
        res.status(500).json({ message: "no videos located" })
      }
    })
};

module.exports.deleteFromCloudinary = (req, res) => {

  // cloudinary.v2.uploader
  //     .destroy('sample', resource_type: 'video')
  //     .then(result => console.log(result));
};

