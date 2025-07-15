const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/main');

router.get('/', Controller.get_home);
router.get('/about', Controller.get_about);
router.get('/user/create', Controller.get_create_user);

module.exports = router;