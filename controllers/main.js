const express = require('express');


/**
 * GET - Get Home Page
 */
module.exports.get_home = (req, res) => {
	res.send('This is the home page');
}