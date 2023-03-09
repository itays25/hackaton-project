const express = require('express');
const router = express.Router()
const { create, getAll, getAllEmotions } = require("../controllers/emotionController")

router.post("/newEmotion", create);
router.get("/allEmotions", getAll);

module.exports = router;