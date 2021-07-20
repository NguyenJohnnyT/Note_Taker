const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');

app.get('/jobs', (req, res) => res.json(db))

app.use(express.static('public'));



app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);