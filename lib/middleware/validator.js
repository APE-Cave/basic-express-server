'use strict';

function validator(req, res, next) {
  console.log(req.path, req.method);
  if (req.path !== '/person' || req.method !== 'GET') {
    console.log('Validator: Bad request');
    next('Bad Request');
  } else if (!req.query.name) {
    console.log('Validator: No name provided');
    next('Server Error');
  } else {
    console.log('Validator: Good Request');
    next();
  }
  next();
}

/*
function validator(req, res, next) {
  console.log(req.path, req.method);
    if (req.path !== '/person' || req.method !== 'GET') {
      console.log('Validator: Bad request');
      next('Bad Request');
    } else if (!req.query.name) {
      console.log('Validator: No name provided');
      next('Server Error');
    } else {
      console.log('Validator: Good Request');
      next();
    }
    next();
  }
  */
module.exports = validator;