require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');


const app  = express();

app.use(cors());
app.use(logger('combined'));
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'assets', 'index.html'));
});



module.exports = app;