const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('./../libs/sequelize');

class AccountingService {
  constructor() {}

  async find() {
    const rta = await models.Accounting.findAll({
      include: ['user'],
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.Accounting.findByPk(id);
    if (!user) {
      throw boom.notFound('Accounting not found');
    }
    return user;
  }

  async create(data) {
    //return data;
    const hash = await bcrypt.hash(data.user.password, 10);
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash,
      },
    };
    const newAccounting = await models.Accounting.create(newData, {
      include: ['user'],
    });
    delete newAccounting.dataValues.user.dataValues.password;
    return newAccounting;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }
}

module.exports = AccountingService;
