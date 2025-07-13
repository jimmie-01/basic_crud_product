const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/main');

router.get('/', Controller.get_home);

module.exports = router;