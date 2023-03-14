const express = require('express');
const router = express.Router();
const { addVideo, allVideos, deleteFromCloudinary, changeStatus } = require('../controllers/videoController');

router.post('/addVideo', addVideo)
router.get('/allVideos', allVideos)
router.put('/changeStatus/:videoId', changeStatus)

module.exports = router;