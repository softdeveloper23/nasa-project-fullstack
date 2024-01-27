const express = require('express');

const planetsRouter = require('./planets/planets.router'); // This will import the planets router
const launchesRouter = require('./launches/launches.router'); // This will import the launches router

const api = express.Router();

api.use('/planets', planetsRouter); // This will use the planets router
api.use('/launches', launchesRouter); // This will use the launches router

module.exports = api;