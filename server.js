const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001
const path = require('path');
const database = require('./db/db.json');

app.use(express.static('public'));

//GET route for homepage
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);