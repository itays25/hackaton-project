const Video = require('../models/Video');

module.exports.review = (req, res) => {
    const { scale, validation, inappropriate } = req.body
    const success = "video successfully rated";
    const fail = "couldn't rate quality, ...no item?"
    if ({ scale, validation } = req.body) {


        Video.findByIdAndUpdate(req.params.id, {
            $inc: {
                [`quality.${scale}`]: 1,
                "votes": 1,
                [`validation.${validation}`]: 1
            }
        })
            .then((item) => {
                if (!item) { res.status(500).send({ message: fail }); }
                else { res.status(200).json({ message: success }); }
            })
            .catch((error) => { res.status(500).json({ message: "error:", error }) });
    };
}


module.exports.inappropriate = (req, res) => {
    Video.findByIdAndUpdate(req.params.id, { $inc:  })
        .then(
            (item) => {
                if (!item) {
                    res.status(500).send({ message: "can't asses" })
                }
                else {
                    res.status(200).json({ message: "appropriate rated" })
                }
            })
}
