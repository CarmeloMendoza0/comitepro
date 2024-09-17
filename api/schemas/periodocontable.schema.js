const Joi = require('joi');

const id = Joi.number().integer();
const nombre_periodo = Joi.string().min(3).max(15);
const fecha_inicio = Joi.date();
const fecha_fin = Joi.date();
const id_empresa = Joi.number().integer();

const createPeriodoContableSchema = Joi.object({
  nombre_periodo: nombre_periodo.required(),
  fecha_inicio: fecha_inicio.required(),
  fecha_fin: fecha_fin.required(),
  id_empresa: id_empresa.required(),
});

const updatePeriodoContableSchema = Joi.object({
  nombre_periodo,
  fecha_inicio,
  fecha_fin,
  id_empresa,
});

const getPeriodoContableSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createPeriodoContableSchema,
  updatePeriodoContableSchema,
  getPeriodoContableSchema,
};
