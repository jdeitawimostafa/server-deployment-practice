'use strict';

const express = require('express');
const app = express();

const errHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');

app.get('/',(req,res) => {
  res.send('Hi i am in server.js');
});

app.get('/wrong',(req,res) => {
  throw new Error('Something Error , Try again please ');
});

app.use('*',notFoundHandler);
app.use(errHandler);

function start(port) {
  app.listen(port,() => {
    console.log(`listining to port ${port}`);
  });
}

module.exports ={
  app:app,
  start:start,
};