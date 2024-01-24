const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router'); // This will import the planets router we created in the previous step

const app = express(); // This will create an Express application


app.use(cors({
    origin: 'http://localhost:3000', // app.use(cors()); // This will allow all requests from all origins
})); 
app.use(express.json()); // This will parse the JSON data from the request body into a JS object so that we can access it in our code
app.use(planetsRouter); // This will use the planets router we created in the previous step

module.exports = app;