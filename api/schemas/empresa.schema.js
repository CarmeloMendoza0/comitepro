const Joi = require('joi');

const id = Joi.number().integer();
const rtu = Joi.string();
const razon_social = Joi.string();
const giro = Joi.string();
const direccion = Joi.string();
const municipio = Joi.string();
const depto = Joi.string();
const telefono = Joi.string();

const createEmpresaSchema = Joi.object({
  rtu: rtu.required(),
  razon_social: razon_social.required(),
  giro: giro.required(),
  direccion: direccion.required(),
  municipio: municipio.required(),
  depto: depto.required(),
  telefono: telefono.required(),
});

const updateEmpresaSchema = Joi.object({
  rtu,
  razon_social,
  giro,
  direccion,
  municipio,
  depto,
  telefono,
});

const getEmpresaSchema = Joi.object({
  /* id_empresa: id_empresa.required(), */
  id: id.required(),
});

module.exports = { createEmpresaSchema, updateEmpresaSchema, getEmpresaSchema };
