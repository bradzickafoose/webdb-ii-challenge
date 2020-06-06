const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const carsRouter = require('../cars/router');

const server = express()
  .use(helmet())
  .use(cors())
  .use(express.json())
  .use(morgan('dev'))
  .use('/api/cars', carsRouter)
  .get('/', (req, res) => res.json({ message: 'API is online' }));

module.exports = server;

