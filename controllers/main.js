const express = require('express');


/**
 * GET - Get Home Page
 */
module.exports.get_home = (req, res) => {
	res.render('index');
}