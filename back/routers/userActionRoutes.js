const express = require('express');
const { login } = require('../controllers/userControllaer');
const router = express.Router();

router.post('/getJwt', login)


module.exports = router;