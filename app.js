//require('dotenv').config();
//import 'dotenv/config' For ES6

const dotenv = require('dotenv');
const express = require('express');
const mongoose = require("mongoose");

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


app.get('/', (req, res) =>{
	res.send('Express App Created');
});

app.listen(3000, 'localhost');