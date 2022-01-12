'use strict';

function validator(req, res, next) {
  if (!req.query.name) {
    console.log('Validator: Bad Request');
    next('Bad Request');
  } else {
    console.log('Validator: Good Request');
    next();
  }
}

module.exports = validator;