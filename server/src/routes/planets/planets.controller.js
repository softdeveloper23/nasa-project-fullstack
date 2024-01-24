const planets = require('../../models/planets.model');

// This will be the controller function for the GET /planets endpoint
function getAllPlanets(req, res) {
    return res.status(200).json(planets);
}

module.exports = {
    getAllPlanets,
};