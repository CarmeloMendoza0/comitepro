const express = require('express');

const usersRouter = require('./users.router');
const accountingRouter = require('./accounting.router');
const empresaRouter = require('./empresa.router');
const periodoContableRouter = require('./periodocontable.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/accounting', accountingRouter);
  router.use('/empresa', empresaRouter);
  router.use('/periodo_contable', periodoContableRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
