const { getAllLaunches } = require('../../models/launches.model');

function httpGetAllLaunches(res, res) {
    return res.status(200).json(getAllLaunches());
}

module.exports = {
    httpGetAllLaunches,
}