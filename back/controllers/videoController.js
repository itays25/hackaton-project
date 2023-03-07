const Video = require('../models/Video');


module.exports.addVideo = (req, res) => {
    if (req.body.emotion == "default") {
        res.status(500).json({ message: "Please, select the emotion" })
    }
    else {
        const newVideo = new Video(req.body)
        newVideo.save((error, video) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: "couldn't add video" })
            }
            else {
                res.status(200).json({ message: "video was added" })
            }
        })
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