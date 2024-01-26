const { getAllPlanets } = require('../../models/planets.model'); // Destructured import

// This will be the controller function for the GET /planets endpoint
async function httpGetAllPlanets(req, res) {
    return res.status(200).json(await getAllPlanets());
}

module.exports = {
    httpGetAllPlanets,
};