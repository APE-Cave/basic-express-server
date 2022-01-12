'use strict';

function badRequest(err, req, res, next) {
  console.log('error: ', err);
  if (err === 'Bad Request') {
    res.status(404).send('Bad Request');
  } else {
    next('Server Error');
  }
}

module.exports = badRequest;