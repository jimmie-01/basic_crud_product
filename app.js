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

// Middleware
app.set('view engine', 'ejs');

app.use('/', mainRoute);

app.listen(3000, 'localhost');