'use strict';

const {
  AccountingSchema,
  ACCOUNTING_TABLE,
} = require('./../models/accounting.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ACCOUNTING_TABLE, AccountingSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ACCOUNTING_TABLE);
  },
};
