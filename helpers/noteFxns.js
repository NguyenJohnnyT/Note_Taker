const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile)

/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */

const writeToFile = (destination, content) => {
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => err ? console.error(err) : console.info(`\nData written to ${destination}`))
}

/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else { 
            const parsedData = JSON.parse(data);
            console.log('content', content);
            console.log('parsedData', parsedData);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    })
}

const readAndDelete = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.forEach((note) => {
                if (content.id === note.id) {
                    console.log(`Note with matching id: ${note.id} found. Removing..`);
                    noteIndex = parsedData.indexOf(note);
                    parsedData.splice(noteIndex, 1);
                    writeToFile(file, parsedData);  
                } 
            })          
        }
    })
}

module.exports = {
    readFromFile,
    writeToFile,
    readAndAppend,
    readAndDelete,
}