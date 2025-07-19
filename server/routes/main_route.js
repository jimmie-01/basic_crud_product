const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/main');

router.get('/', Controller.get_home);
router.get('/users', Controller.get_users);
router.get('/about', Controller.get_about);
router.get('/user/create', Controller.get_create_user);
router.post('/user/create', Controller.post_create_user);
router.get('/users/:id', Controller.get_single_user);
router.get('/edit/:name/:action', Controller.get_edit_user);

module.exports = router;