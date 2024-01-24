const express = require('express');

// Import the getAllPlanets controller function
const {
    httpGetAllPlanets,
} = require('./planets.controller');

// Create a new router instance
const planetsRouter = express.Router();

// Create a new GET endpoint for /planets
planetsRouter.get('/planets', httpGetAllPlanets);

module.exports = planetsRouter;