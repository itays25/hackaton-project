const express = require('express');
const router = express.Router();
const { review, inappropriate } = require('../controllers/ratingController');

router.put('/rateVideo/:id', review)
router.put('/rateVideo/:id', inappropriate)


module.exports = router;