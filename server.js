const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));

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
