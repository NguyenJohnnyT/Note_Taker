const notes = require('express').Router();
const {readFromFile, readAndAppend, readAndDelete} = require('../helpers/noteFxns.js');
const uuid = require('../helpers/uuid');

// GET Route for retrieving ALL! the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/', (req, res) => {
    console.log('req.body', req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        }

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully 😂');
    } else {
        res.error('Error in adding note');
    }
})

notes.delete('/:id', (req, res) => {
    console.log('req', req.params.id);

    if (req.params.id) {
        const oldNote = {
            id: req.params.id
        }

        readAndDelete(oldNote, './db/db.json');
        res.json('Note deleted successfully 😢')
    } else {
        res.error('Error in deleting note');
    }


})

module.exports = notes;