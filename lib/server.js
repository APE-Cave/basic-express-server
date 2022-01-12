'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const error500 = require('./error-handlers/500.js');
const error404 = require('./error-handlers/404.js');

app.use(logger);
// app.use(express.json()); // TODO see what for
app.get('/person', validator, (req, res) => {

  res.status(200).send('Test successful');
});

app.use(error404);
app.use(error500);
module.exports = {
  start: (port) => {
    app.listen(port, () => console.log('Server is listening on ', port));
  }, app,
};