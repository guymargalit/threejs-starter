const express = require('express');
const app = express();
const port = 5000;

let requirejs = require('requirejs');
requirejs.config({ nodeRequire: require });

app.use(express.static('src'));

app.get('/', (req, res) => {
	res.sendFile(express.static);
});

app.listen(port, err => {
	if (!err) {
		console.log(`Server is running on ${port}`);
	} else {
		console.log(err);
	}
});
