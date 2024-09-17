const { Model, DataTypes, Sequelize } = require('sequelize');
const { EMPRESA_TABLE } = require('./empresa.model');

const PERIODO_CONTABLE_TABLE = 'periodo_contable';

const PeriodoContableSchema = {
  id_periodo: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre_periodo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fecha_inicio: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  fecha_fin: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  id_empresa: {
    field: 'id_empresa',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EMPRESA_TABLE,
      key: 'id_empresa',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class PeriodoContable extends Model {
  static associate(models) {
    this.belongsTo(models.Empresa, { as: 'empresa', foreignKey: 'id_empresa' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PERIODO_CONTABLE_TABLE,
      modelName: 'PeriodoContable',
      timestamps: false,
    };
  }
}

module.exports = {
  PeriodoContable,
  PeriodoContableSchema,
  PERIODO_CONTABLE_TABLE,
};
