const User = require('./models/User')
const Video = require('./models/Video')

module.exports.register = (req, res) => {
    const newUser = new User(req.body)
    newUser.save((error, user) => {
        if (error) {
            console.log(error);
            res.status(500).send({ message: "couldn't create a user" })
        }
        else {
            res.status(200).json({ message: "a new user was created" })
        }
    })
}

module.exports.login = (req, res) => {
    User.findOne({
        email: req.body.email,
    },
        (error, user) => {
            if (error) {
                res.status(500).send({ message: "couldn't find a user" })
            }
            else if (user == null) {
                res.status(404).send({ message: "user doesn't exist" })
            }
            else if (req.body.email == User.Email
                && req.body.Password !== user.Password || req.body.userName !== user.userName) {
                res.status(404).send({ message: "password/username doesn't match" })
            }
            else {
                res.status(200).json({ message: "succssesfully logged in" })
            }
        }
    )
}

module.exports.addVideo = (req, res) => {
    const newVideo = new Video(req.body)
    newVideo.save((error, video) => {
        if (error) {
            console.log(error);
            res.status(500).send({ message: "couldn't add video" })
        }
        else {
            res.status(200).json({ message: "video was added" })
        }
    })
}

module.exports.rateVideo = (req, res) => {
    Video.findByIdAndUpdate(
        req.params.id,
        { $inc: { votes: 1 } }
    )
        .then(
            (item) => {
                if (!item) {
                    res.status(500).send({ message: "couldn't rate video" })
                }
                else {
                    res.status(200).json({ message: "succssesfully rated" })
                }
            }
        )

}

module.exports.rateQuality = (req, res) => {
    Video.findByIdAndUpdate(
        req.params.id,
        { $inc: { "quality.1": 1 } }
    )
        .then(
            (item) => {
                if (!item) {
                    res.status(500).send({ message: "couldn't rate quality" })
                }
                else {
                    res.status(200).json({ message: "succssesfully rated" })
                }
            }
        )

}
module.exports.rateQuality2 = (req, res) => {
    Video.findByIdAndUpdate(
        req.params.id,
        { $inc: { "quality.2": 1 } }
    )
        .then(
            (item) => {
                if (!item) {
                    res.status(500).send({ message: "couldn't rate quality" })
                }
                else {
                    res.status(200).json({ message: "succssesfully rated" })
                }
            }
        )

}
module.exports.rateQuality3 = (req, res) => {
    Video.findByIdAndUpdate(
        req.params.id,
        { $inc: { "quality.3": 1 } }
    )
        .then(
            (item) => {
                if (!item) {
                    res.status(500).send({ message: "couldn't rate quality" })
                }
                else {
                    res.status(200).json({ message: "succssesfully rated" })
                }
            }
        )

}
module.exports.rateQuality4 = (req, res) => {
    Video.findByIdAndUpdate(
        req.params.id,
        { $inc: { "quality.4": 1 } }
    )
        .then(
            (item) => {
                if (!item) {
                    res.status(500).send({ message: "couldn't rate quality" })
                }
                else {
                    res.status(200).json({ message: "succssesfully rated" })
                }
            }
        )

}
module.exports.rateQuality5 = (req, res) => {
    Video.findByIdAndUpdate(
        req.params.id,
        { $inc: { "quality.5": 1 } }
    )
        .then(
            (item) => {
                if (!item) {
                    res.status(500).send({ message: "couldn't rate quality" })
                }
                else {
                    res.status(200).json({ message: "succssesfully rated" })
                }
            }
        )

}

module.exports.isAppropriate = (req, res) => {
    Video.findByIdAndUpdate(
        req.params.id,
        { $inc: { isAppropriate: 1 } }
    )
        .then(
            (item) => {
                if (!item) {
                    res.status(500).send({ message: "can't asses" })
                }
                else {
                    res.status(200).json({ message: "appropriate rated" })
                }
            }
        )

}

module.exports.correctAnswer = (req, res) => {
    Video.findByIdAndUpdate(
        req.params.id,
        { $inc: { "validation.correctAnswer": 1 } }
    )
        .then(
            (item) => {
                if (!item) {
                    res.status(500).send({ message: "couldn't answer" })
                }
                else {
                    res.status(200).json({ message: "succssesfully answered" })
                }
            }
        )

}
module.exports.similiarAnswer = (req, res) => {
    Video.findByIdAndUpdate(
        req.params.id,
        { $inc: { "validation.similiarAnswer": 1 } }
    )
        .then(
            (item) => {
                if (!item) {
                    res.status(500).send({ message: "couldn't answer" })
                }
                else {
                    res.status(200).json({ message: "succssesfully answered" })
                }
            }
        )

}
module.exports.randomAnswer = (req, res) => {
    Video.findByIdAndUpdate(
        req.params.id,
        { $inc: { "validation.randomAnswer": 1 } }
    )
        .then(
            (item) => {
                if (!item) {
                    res.status(500).send({ message: "couldn't answer" })
                }
                else {
                    res.status(200).json({ message: "succssesfully answered" })
                }
            }
        )
}

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
}