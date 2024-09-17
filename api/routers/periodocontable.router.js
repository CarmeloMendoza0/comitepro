const express = require('express');
const PeriodoContableService = require('./../services/periodocontable.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createPeriodoContableSchema,
  getPeriodoContableSchema,
  updatePeriodoContableSchema,
} = require('../schemas/periodocontable.schema');

const router = express.Router();
const service = new PeriodoContableService();

router.get('/', async (req, res, next) => {
  try {
    const periodos = await service.find();
    res.json(periodos);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getPeriodoContableSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createPeriodoContableSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPeriodo = await service.create(body);
      res.status(201).json(newPeriodo);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getPeriodoContableSchema, 'params'),
  validatorHandler(updatePeriodoContableSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const periodo = await service.update(id, body);
      res.json(periodo);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getPeriodoContableSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
