const http = require('http');

const app = require('./app');

// Checks if there is a port specified in the environment or defaults to PORT 8000
const PORT = process.env.PORT || 8000;

// Creates a server that will listen to requests on the specified PORT
const server = http.createServer(app);

// Starts the server
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});


