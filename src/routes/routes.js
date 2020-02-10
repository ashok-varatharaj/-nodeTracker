const app = require('express').Router();

//  ROUTES LIST
const home = require('../home/routes/homeRoutes');

app.use('/',home);

module.exports = app;