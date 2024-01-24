// --- This code takes data from NASA's Kepler Telescope a filters over 9,500 planets to find 8 possibly habitable planets in the known galaxy. ---

// Built-ins
const fs = require('fs'); // fs is a Node.js module that allows us to read and write files.
const path = require('path');

// Third party installs
const { parse } = require('csv-parse'); // Destructuring the parse() function from csv-parse.


const habitablePlanets = []; // Stores an array of JS objects from parse().

// A function that filters out the habitable planets in the data provided from NASA.
function isHabitablePlanet(planet) {
    return  planet['koi_disposition'] === 'CONFIRMED' // Checks if planet data is CONFIRMED.
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 // Check if Stellar Flux data for planet is between 0.36 and 1.11 which is close to Earth's.
    && planet['koi_prad'] < 1.6; // Check if planet data radius upper limit is less than 1.6 times that of Earth.
}

function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv')) // createReadStream() reads the kepler_data.csv as a stream via a path module.
            .pipe(parse({ // .pipe connects both streams. It connects a readable stream source ('createReadStream()') to a writable stream destination ('parse()').
                comment: '#', // Passed in an object providing two options (comment and columns).
                columns: true, // 'comments:' lets the parser know the symbol for comments in the .csv
            }))                // and 'columns:' returns each row in the .csv file as a JS object with 'key: value' pairs rather than as just an array of values in a row.
            .on('data', (data) => {
                // Checks if the planet is habitable.
                if (isHabitablePlanet(data)) {
                    habitablePlanets.push(data); // Pushes the data into the habitablePlanets array.
                }
            })
            .on('error', (err) => {
                console.log(err);
                reject(err);
            })
            .on('end', () => {
                console.log(`${habitablePlanets.length} habitable planets found!`); // Prints the number of habitable planets found by checking the number of objects in the array.
                resolve();
            });
    });
}


module.exports = {
    loadPlanetsData,
    planets: habitablePlanets,
};