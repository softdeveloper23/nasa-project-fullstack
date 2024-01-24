const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router'); // This will import the planets router
const launchesRouter = require('./routes/launches/launches.router'); // This will import the launches router

const app = express(); // This will create an Express application


app.use(cors({
    origin: 'http://localhost:3000', // app.use(cors()); // This will allow all requests from all origins
}));
app.use(morgan('combined')); // To log requests
app.use(express.json()); // This will parse the JSON data from the request body into a JS object so that we can access it in our code
app.use(express.static(path.join(__dirname, '..', 'public'))); // This will serve the static files from the public directory
app.use(planetsRouter); // This will use the planets router
app.use(launchesRouter); // This will use the launches router

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;