const express = require('express');
const { createUser } = require('../controllers/userControllaer');
const { checkID } = require('../controllers/userControllaer');
const router = express.Router();

router.post('/createUser', createUser)
router.post('/checkID', checkID)



module.exports = router;