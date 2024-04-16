const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');
const Cliente = require('./Clientes');

const Tarjeta = sequelize.define('Tarjeta', {
    id_tarjeta: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    numero_tarjeta: {
        type: DataTypes.STRING(16)
    },
    nombre_titular: {
        type: DataTypes.STRING(50)
    },
    fecha_emision: {
        type: DataTypes.DATE
    },
    fecha_vencimiento: {
        type: DataTypes.DATE
    },
    fecha_corte: {
        type: DataTypes.DATE
    },
    cupo_total: {
        type: DataTypes.DECIMAL(10, 2)
    },
    cupo_disponible: {
        type: DataTypes.DECIMAL(10, 2)
    },
    saldo_actual: {
        type: DataTypes.DECIMAL(10, 2)
    },
    tasa_interes: {
        type: DataTypes.DECIMAL(5, 2)
    },
    estado_tarjeta: {
        type: DataTypes.STRING(50)
    },
    cvv: {
        type: DataTypes.STRING(3)
    },
    pago_minimo: {
        type: DataTypes.DECIMAL(10, 2)
    },
    pago_total: {
        type: DataTypes.DECIMAL(10, 2)
    },
    pago_anticipado: {
        type: DataTypes.DECIMAL(10, 2)
    },
    ultimos_movimientos: {
        type: DataTypes.TEXT
    },
    tipo_tarjeta: {
        type: DataTypes.STRING(50)
    },
    programa_puntos: {
        type: DataTypes.STRING(50)
    }
});

Tarjeta.belongsTo(Cliente, { foreignKey: 'id_cliente' });

module.exports = Tarjeta;
