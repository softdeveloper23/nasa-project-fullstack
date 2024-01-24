const express = require('express');

// Import the getAllPlanets controller function
const {
    getAllPlanets,
} = require('./planets.controller');

// Create a new router instance
const planetsRouter = express.Router();

// Create a new GET endpoint for /planets
planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;