const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');
const Cuenta = require('./Cuentas');

const Transaccion = sequelize.define('Transaccion', {
    id_transaccion: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tipo_transaccion: {
        type: DataTypes.STRING(50)
    },
    monto: {
        type: DataTypes.DECIMAL(10, 2)
    },
    fecha_transaccion: {
        type: DataTypes.DATE
    },
    descripcion: {
        type: DataTypes.TEXT
    }
});

Transaccion.belongsTo(Cuenta, { foreignKey: 'id_cuenta' });

module.exports = Transaccion;
