const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const removeHttpHeader = require('../middlewares/removeHttpHeader');
const corsOptions = {
  origin: [process.env.CLIENT_URL],
};
const serverConfig = (app) => {
  app.use(morgan('dev'));
  app.use(cors(corsOptions));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(removeHttpHeader);
  app.use(express.static(path.resolve(__dirname, '..', 'public')));
};
module.exports = serverConfig;