const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');
const Cliente = require('./Clientes');

const Cuenta = sequelize.define('Cuenta', {
    id_cuenta: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tipo_cuenta: {
        type: DataTypes.STRING(50)
    },
    saldo_actual: {
        type: DataTypes.DECIMAL(10, 2)
    },
    moneda: {
        type: DataTypes.STRING(10)
    },
    fecha_apertura: {
        type: DataTypes.DATE
    },
    fecha_cierre: {
        type: DataTypes.DATE
    },
    estado_cuenta: {
        type: DataTypes.STRING(50)
    }
});

Cuenta.belongsTo(Cliente, { foreignKey: 'id_cliente' });

module.exports = Cuenta;
