const Video = require('../models/Video');

module.exports.rateQuality = (req, res) => {
    const success = "successfully rated";
    const fail = "couldn't rate quality"
    switch (req.body.scale) {
        case 1:
            Video.findByIdAndUpdate(req.params.id, { $inc: { "quality.1": 1 } })
                .then((item) => {
                    if (!item) { res.status(500).send({ message: fail }); }
                    else { res.status(200).json({ message: success }); }
                })
                .catch((error) => { res.status(500).json({ message: "error:", error }) });
            break;
        case 2:
            Video.findByIdAndUpdate(req.params.id, { $inc: { "quality.2": 1 } })
                .then((item) => {
                    if (!item) { res.status(500).send({ message: fail }); }
                    else { res.status(200).json({ message: success }); }
                })
                .catch((error) => { res.status(500).json({ message: "error:", error }) });
            break;
        case 3:
            Video.findByIdAndUpdate(req.params.id, { $inc: { "quality.3": 1 } })
                .then((item) => {
                    if (!item) { res.status(500).send({ message: fail }); }
                    else { res.status(200).json({ message: success }); }
                })
                .catch((error) => { res.status(500).json({ message: "error:", error }) });
            break;
        case 4:
            Video.findByIdAndUpdate(req.params.id, { $inc: { "quality.4": 1 } })
                .then((item) => {
                    if (!item) { res.status(500).send({ message: fail }); }
                    else { res.status(200).json({ message: success }); }
                })
                .catch((error) => { res.status(500).json({ message: "error:", error }) });
            break;
        case 5:
            Video.findByIdAndUpdate(req.params.id, { $inc: { "quality.5": 1 } })
                .then((item) => {
                    if (!item) { res.status(500).send({ message: fail }); }
                    else { res.status(200).json({ message: success }); }
                })
                .catch((error) => { res.status(500).json({ message: "error:", error }) });
            break;
        default:
            res.status(400).send({ message: "invalid rating scale" });
    }
};

