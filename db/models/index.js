const { User, UserSchema } = require('./user.model');
const { Accounting, AccountingSchema } = require('./accounting.model');
const { Empresa, EmpresaSchema } = require('./empresa.model');
const {
  PeriodoContable,
  PeriodoContableSchema,
} = require('./periodocontable.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Accounting.init(AccountingSchema, Accounting.config(sequelize));
  Empresa.init(EmpresaSchema, Empresa.config(sequelize));
  PeriodoContable.init(
    PeriodoContableSchema,
    PeriodoContable.config(sequelize),
  );

  User.associate(sequelize.models);
  Accounting.associate(sequelize.models);
  Empresa.associate(sequelize.models);
  PeriodoContable.associate(sequelize.models);
}

module.exports = setupModels;
