const express = require('express');
const router = express.Router();
const { rateQuality } = require('../controllers/ratingController');

router.put('/rateVideo/:id', rateQuality)


module.exports = router;