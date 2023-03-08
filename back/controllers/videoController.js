const Video = require('../models/Video');
const Emotion = require('../models/Emotion');
const { default: mongoose } = require('mongoose');


module.exports.addVideo = async (req, res) => {
    const searchQuery = {
      stock: { $elemMatch: { _id: mongoose.Types.ObjectId(req.params.emotionId) } }
    };
    const projection = { 'stock.$': 1 }; // project only the matching 'stock' element
  
    try {
      const emotion = await Emotion.findOneAndUpdate(searchQuery, projection);
      if (!emotion) {
        return res.status(404).json({ message: 'Emotion not found' });
      }
  
      const matchingStock = emotion.stock; // the matching stock element is at index 0 since we used the '$' operator to project only one element
      res.status(200).json(matchingStock);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
//     else {
//         const newVideo = new Video(req.body)
//         newVideo.save((error, video) => {
//             if (error) {
//                 console.log(error);
//                 res.status(500).json({ message: "couldn't add video", error })
//             }
//             else {
//                 res.status(200).json({  video });
//                 Emotion.findByIdAndUpdate(req.params.emotionId, {
//                     $push: { "stock.content": req.body.new } 
//                 }
//                 ).then((res) => console.log(res.data))
//                 if (error) {
//                     res.status(500).json({ message: "couldn't add videoRef to emotion content" })
//                 } else {
//                     res.status(200).json({ message: "video was added" });

//                 }
//             }
//         })
// }

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