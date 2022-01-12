'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');

app.use(logger);
// app.use(express.json()); // TODO see what for
app.get('/test', (req, res) => {
  res.status(200).send('Test successful');
});



module.exports = {
  start: (port) => {
    app.listen(port, () => console.log('Server is listening on ', port));
  }, app,
};