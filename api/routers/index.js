const express = require('express');

const usersRouter = require('./users.router');
const accountingRouter = require('./accounting.router');
const empresaRouter = require('./empresa.router');
const periodoContableRouter = require('./periodocontable.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/accounting', accountingRouter);
  router.use('/empresa', empresaRouter);
  router.use('/periodo_contable', periodoContableRouter);
}

module.exports = routerApi;
