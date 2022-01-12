'use strict';

function badRequest(err, req, res, next) {
  if (err === 'Bad Request') {
    res.status(404).send('Bad Request');
  } else {
    next('Server Error');
  }
}

module.exports = badRequest;