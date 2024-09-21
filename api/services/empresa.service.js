const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class EmpresaService {
  constructor() {}

  async create(data) {
    const newEmpresa = await models.Empresa.create(data);
    return newEmpresa;
  }

  async find() {
    const empresas = await models.Empresa.findAll();
    return empresas;
  }

  async findOne(id) {
    const empresa = await models.Empresa.findByPk(id, {
      include: ['periodos'],
    });
    return empresa;
  }

  async update(id, changes) {
    const empresa = await this.findOne(id);
    const updatedEmpresa = await empresa.update(changes);
    return updatedEmpresa;
  }

  async delete(id) {
    const empresa = await this.findOne(id);
    await empresa.destroy();
    return { id };
  }
}

module.exports = EmpresaService;
