const express = require('express');
const User = require('../models/userSchema');


/**
 * GET - Get Home Page
 */
module.exports.get_home = (req, res) => {
	res.redirect('/users');
}

/**
 * GET - Get All Users
 */
module.exports.get_users = async (req, res) => {
	try {
		const users = await User.find().sort({ createdAt: -1});
		if(!users){
			return res.status(401).json({ message: "No User found on Database" });
		}
		res.render('index', { title: "Home Page", users });	
	} catch (error) {
		console.log(error);		
	}
}


/**
 * GET - About Page
 */
module.exports.get_about = (req, res) => {
	res.render('about', { title: "About Page" });
}

/**
 * GET - Add User Page
 */
module.exports.get_create_user = (req, res) => {
	res.render('add_user', { title: "Add User"});
}

/**
 * POST - Submit User Credential to DB
 */
module.exports.post_create_user =  async (req, res) => {
	try {
		const {name, email, password, address, number} = req.body;
		try {
			const user = await User.create({
			name,
			email,
			password,
			address,
			number
		});
		res.status(201).redirect('/users');	
		} catch (error) {
			if (error === 11000){
				return res.status(403).json({ message: "User Already Exist" });
			}
			res.status(500).json({ message: "Internal Server Error"});
		}
	} catch (error) {
		console.log(error);
	}
}

/**
 * GET- Get user details
 */

module.exports.get_single_user = async(req, res) => {
	try {
		const id = req.params.id;
		const user = await User.findById(id);
		res.status(201).render('details', { title: "User Details", user, action: 'edit' });
	} catch (error) {
		console.log(error);
	};
}