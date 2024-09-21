'use strict';

const { EmpresaSchema, EMPRESA_TABLE } = require('../models/empresa.model');
const {
  PeriodoContableSchema,
  PERIODO_CONTABLE_TABLE,
} = require('../models/periodocontable.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(EMPRESA_TABLE, EmpresaSchema);
    await queryInterface.createTable(
      PERIODO_CONTABLE_TABLE,
      PeriodoContableSchema,
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable(EMPRESA_TABLE);
    await queryInterface.dropTable(PERIODO_CONTABLE_TABLE);
  },
};
