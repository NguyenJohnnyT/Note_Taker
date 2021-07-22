const notes = require('express').Router();
const {readFromFile, readAndAppend} = require('../helpers/noteFxns.js');

// GET Route for retrieving ALL! the notes
notes.get('/', (req, res) => {
    const data = await noteFxns.readFile('./db/db.json');
    res.json(JSON.parse(data));
})

// POST Route for a new note
notes.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text
        }

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully 😂');
    } else {
        res.error('Error in adding tip');
    }
})