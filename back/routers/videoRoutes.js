const express = require('express');
const router = express.Router();
const { addVideo, allVideos, deleteFromCloudinary } = require('../controllers/videoController');

router.post('/addVideo', addVideo)
router.get('/allVideos', allVideos)


module.exports = router;