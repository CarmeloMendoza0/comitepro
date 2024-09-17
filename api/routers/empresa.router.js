const express = require('express');
const EmpresaService = require('./../services/empresa.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createEmpresaSchema,
  getEmpresaSchema,
  updateEmpresaSchema,
} = require('./../schemas/empresa.schema');

const router = express.Router();
const service = new EmpresaService();

router.get('/', async (req, res, next) => {
  try {
    const empresas = await service.find();
    res.json(empresas);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getEmpresaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const empresa = await service.findOne(id);
      res.json(empresa);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createEmpresaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEmpresa = await service.create(body);
      res.status(201).json(newEmpresa);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getEmpresaSchema, 'params'),
  validatorHandler(updateEmpresaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const empresa = await service.update(id, body);
      res.json(empresa);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getEmpresaSchema, 'params'),
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
