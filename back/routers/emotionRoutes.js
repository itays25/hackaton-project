const express = require('express');
const router = express.Router()
const { createSpectrum,
    getAll,
    addEmotion,
    deleteSpectrum,
    deleteEmotion, 
    updateSpectrum,
    updateEmotion
} = require("../controllers/emotionController")

router.get("/allEmotions", getAll);
router.post("/createSpectrum", createSpectrum);
router.post("/addEmotion/:spectrumId", addEmotion);
router.post("/deleteSpectrum/:spectrumId", deleteSpectrum);
router.post("/deleteEmotion/", deleteEmotion);
router.post("/updateSpectrum/:spectrumId", updateSpectrum);
router.post("/updateEmotion", updateEmotion);

module.exports = router;

