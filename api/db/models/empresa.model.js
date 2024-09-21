const { Model, DataTypes, Sequelize } = require('sequelize');

const EMPRESA_TABLE = 'empresa';

const EmpresaSchema = {
  id_empresa: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  rtu: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  razon_social: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  giro: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  direccion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  municipio: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  depto: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  telefono: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Empresa extends Model {
  static associate(models) {
    this.hasMany(models.PeriodoContable, {
      as: 'periodos',
      foreignKey: 'id_empresa',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EMPRESA_TABLE,
      modelName: 'Empresa',
      timestamps: false,
    };
  }
}

module.exports = { Empresa, EmpresaSchema, EMPRESA_TABLE };
