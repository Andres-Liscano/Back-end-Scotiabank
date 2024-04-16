const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');
const Cliente = require('./Clientes');

const Credito = sequelize.define('Credito', {
    id_credito: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    monto_original: {
        type: DataTypes.DECIMAL(10, 2)
    },
    saldo_pendiente: {
        type: DataTypes.DECIMAL(10, 2)
    },
    tasa_interes: {
        type: DataTypes.DECIMAL(5, 2)
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_finalizacion: {
        type: DataTypes.DATE
    },
    tipo_credito: {
        type: DataTypes.STRING(50)
    },
    estado_credito: {
        type: DataTypes.STRING(50)
    }
});

Credito.belongsTo(Cliente, { foreignKey: 'id_cliente' });

module.exports = Credito;
