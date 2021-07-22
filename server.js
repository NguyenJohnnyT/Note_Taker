const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001
const path = require('path');
const api = require('./routes/index.js')
const database = require('./db/db.json');



api.use(express.json());
app.use(express.urlencoded({ extended: true}));
api.use('/api', api)

app.use(express.static('public'));

//GET route for homepage
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);