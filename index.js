'use srtict';

const server = require('./server.js');
require('dotenv').config();

const port = process.env.PORT || 4000;

server.start(port);