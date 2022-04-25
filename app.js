const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = parseInt(process.env.PORT || 8080);

const players = require('./routes/players');
const tournaments = require('./routes/tournaments');
const matches = require('./routes/matches');

app.use(bodyParser.json());
app.use(cors());

app.use('/players', players);
app.use('/tournaments', tournaments);
app.use('/matches', matches);

// Default route
app.get("/", (req, res) => {
	// Design a default home page and render it
	res.send("TennisBuddy API");
});

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: req.app.get('env') === 'development' ? err.stack : {}
	});
});

module.exports = app;

app.listen(port)
	.on('error', console.error.bind(console))
	.on('listening', console.log.bind(console, `Listening on http://localhost:${port}`));