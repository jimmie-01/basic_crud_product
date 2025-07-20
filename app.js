//require('dotenv').config();
//import 'dotenv/config' For ES6

const dotenv = require('dotenv');
const express = require('express');
const mongoose = require("mongoose");
const mainRoute = require('./server/routes/main_route');

dotenv.config();

// Express App
const app = express();

// Connect to DB(mongodb) and listen for requests
const dbURI = process.env.dbURI;
mongoose.connect(dbURI)
	.then((result) => app.listen(5000, () => {
		console.log("Successfully Connected to Database!");
	}))
	.catch((error) => {
		console.log(error);
	})

// Set View Engine
app.set('view engine', 'ejs');

//Middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', mainRoute);
app.use((req, res) => {
	res.render('404', { title: 'NotFound' });
})