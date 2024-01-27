// API is stateless for cluster mode
// Data persist between restarts

const http = require('http');

const app = require('./app');
const{mongoConnect} = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const {loadLaunchData} = require('./models/launches.model');

// Checks if there is a port specified in the environment or defaults to PORT 8000
const PORT = process.env.PORT || 8000;

// Creates a server that will listen to requests on the specified PORT
const server = http.createServer(app);

async function startServer() {
    // Connects to the MongoDB database
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();

    // Starts the server
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();



