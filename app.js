const express = require('express');
const app = express();


app.get('/', (req, res) =>{
	res.send('Express App Created');
});

app.listen(3000, 'localhost');