const express= require('express');

//* Import our modular router for /notes
const notesRouter = require('./notes.js');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;