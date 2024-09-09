const { User, UserSchema } = require('./user.model');
const { Accounting, AccountingSchema } = require('./accounting.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Accounting.init(AccountingSchema, Accounting.config(sequelize));

  User.associate(sequelize.models);
  Accounting.associate(sequelize.models);
}

module.exports = setupModels;
