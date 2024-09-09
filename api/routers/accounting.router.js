const express = require('express');

const AccountingService = require('./../services/accounting.service');
const validationHandler = require('./../middlewares/validator.handler');
const {
  createAccountingSchema,
  getAccountingSchema,
  updateAccountingSchema,
} = require('./../schemas/accounting.schema');

const router = express.Router();
const service = new AccountingService();

router.get('/', async (req, res, next) => {
  try {
    res.json(await service.find());
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validationHandler(createAccountingSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validationHandler(getAccountingSchema, 'params'),
  validationHandler(updateAccountingSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      res.status(201).json(await service.update(id, body));
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validationHandler(getAccountingSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
