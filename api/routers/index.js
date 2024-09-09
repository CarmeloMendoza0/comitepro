const express = require('express');

const usersRouter = require('./users.router');
const accountingRouter = require('./accounting.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/accounting', accountingRouter);
}

module.exports = routerApi;
