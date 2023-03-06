const Video = require('../models/Video');

module.exports.review = (req, res) => {
    const success = "successfully rated";
    const fail = "couldn't rate quality"

    switch (req.body.scale) {
        case 1:
            Video.findByIdAndUpdate(req.params.id, { $inc: { "quality.1": 1, "votes": 1 } })
                .then((item) => {
                    if (!item) { res.status(500).send({ message: fail }); }
                    else { res.status(200).json({ message: success }); }
                })
                .catch((error) => { res.status(500).json({ message: "error:", error }) });
            break;

        case 2:
            Video.findByIdAndUpdate(req.params.id, { $inc: { "quality.2": 1, "votes": 1 } })
                .then((item) => {
                    if (!item) { res.status(500).send({ message: fail }); }
                    else { res.status(200).json({ message: success }); }
                })
                .catch((error) => { res.status(500).json({ message: "error:", error }) });
            break;

        case 3:
            Video.findByIdAndUpdate(req.params.id, { $inc: { "quality.3": 1, "votes": 1 } })
                .then((item) => {
                    if (!item) { res.status(500).send({ message: fail }); }
                    else { res.status(200).json({ message: success }); }
                })
                .catch((error) => { res.status(500).json({ message: "error:", error }) });
            break;

        case 4:
            Video.findByIdAndUpdate(req.params.id, { $inc: { "quality.4": 1, "votes": 1 } })
                .then((item) => {
                    if (!item) { res.status(500).send({ message: fail }); }
                    else { res.status(200).json({ message: success }); }
                })
                .catch((error) => { res.status(500).json({ message: "error:", error }) });
            break;

        case 5:
            Video.findByIdAndUpdate(req.params.id, { $inc: { "quality.5": 1, "votes": 1 } })
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


module.exports.inappropriate = (req, res) => {
    Video.findByIdAndUpdate(req.params.id, { $inc: { inappropriate: 1 } })
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

// module.exports.correctAnswer = (req, res) => {
//     Video.findByIdAndUpdate(
//         req.params.id,
//         { $inc: { "validation.correctAnswer": 1 } }
//     )
//         .then(
//             (item) => {
//                 if (!item) {
//                     res.status(500).send({ message: "couldn't answer" })
//                 }
//                 else {
//                     res.status(200).json({ message: "succssesfully answered" })
//                 }
//             }
//         )

// }
// module.exports.similiarAnswer = (req, res) => {
//     Video.findByIdAndUpdate(
//         req.params.id,
//         { $inc: { "validation.similiarAnswer": 1 } }
//     )
//         .then(
//             (item) => {
//                 if (!item) {
//                     res.status(500).send({ message: "couldn't answer" })
//                 }
//                 else {
//                     res.status(200).json({ message: "succssesfully answered" })
//                 }
//             }
//         )

// }
// module.exports.randomAnswer = (req, res) => {
//     Video.findByIdAndUpdate(
//         req.params.id,
//         { $inc: { "validation.randomAnswer": 1 } }
//     )
//         .then(
//             (item) => {
//                 if (!item) {
//                     res.status(500).send({ message: "couldn't answer" })
//                 }
//                 else {
//                     res.status(200).json({ message: "succssesfully answered" })
//                 }
//             }
//         )
// }

