const http = require('http');

const PORT = process.env.PORT || 8000; // Checks if there is a port specified in the environment or defaults to PORT 8000

const server = http.createServer(/*SOMETHING*/);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});


