"use strict";

const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

//  ENV
dotenv.config();

//  ROUTES
const routes = require('./routes/routes');
app.use('/',routes);

let env = process.env.PORT;
console.log(env);

let PORT = 5000;

app.listen(PORT,() => console.log(`Connected to localhost:${PORT}`));