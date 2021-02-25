'use strict';

const express = require('express');
const app = express();

const errors = require('./errorhandlers/500.js')
const badRequest = require('./errorhandlers/404.js')
const logger = require('./middleware/logger')

app.use(express.json());
app.use(logger);


app.get('/person', (req, res) => {
  res.status(200).json({ name: req.query.name})
});

app.use(errors); //404
app.use('*', badRequest); //500

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Port ==> ${port}`);
    })
  }
}