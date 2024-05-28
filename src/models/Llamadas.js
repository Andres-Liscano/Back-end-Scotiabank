const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');
const Cliente = require('./Clientes');
const Empleado = require('./Empleados');

const Llamada = sequelize.define('LLamadas', {
    id_llamada: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Clientes',
        key: 'id_cliente'
      }
    },
    id_empleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Empleados',
        key: 'id_empleado'
      }
    },
    fecha_atencion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tipo_atencion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'LLamadas',
    timestamps: false
  });

Llamada.belongsTo(Cliente, { foreignKey: 'id_cliente' });
Llamada.belongsTo(Empleado, { foreignKey: 'id_empleado' });

module.exports = Llamada;
