const app = require('express').Router();

//  API
const home = require('../api/home');

//  ROUTES
app.route('/').get(home.home);

module.exports = app;