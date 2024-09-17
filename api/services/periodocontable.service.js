const boom = require('@hapi/boom');
const { models } = require('./../../libs/sequelize');

class PeriodoContableService {
  constructor() {}

  async create(data) {
    const newPeriodo = await models.PeriodoContable.create(data);
    return newPeriodo;
  }

  async find() {
    const periodos = await models.PeriodoContable.findAll({
      include: ['empresa'],
    });
    return periodos;
  }

  async findOne(id) {
    const periodo = await models.PeriodoContable.findByPk(id);
    if (!periodo) {
      throw boom.notFound('Periodo contable no encontrado');
    }
    return periodo;
  }

  async update(id, changes) {
    const periodo = await this.findOne(id);
    const updatedPeriodo = await periodo.update(changes);
    return updatedPeriodo;
  }

  async delete(id) {
    const periodo = await this.findOne(id);
    await periodo.destroy();
    return { id };
  }
}

module.exports = PeriodoContableService;
