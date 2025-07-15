const express = require('express');


/**
 * GET - Get Home Page
 */
module.exports.get_home = (req, res) => {
	res.render('index');
}

/**
 * GET - About Page
 */
module.exports.get_about = (req, res) => {
	res.render('about');
}

/**
 * GET - Add User Page
 */
module.exports.get_create_user = (req, res) => {
	res.render('add_user');
}