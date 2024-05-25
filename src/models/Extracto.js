const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');
const Tarjetas = require('./Tarjetas');

const Extracto = sequelize.define('Extracto', {
    id_extracto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_tarjeta: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Tarjetas',
            key: 'id_tarjeta'
        }
    },
    fecha_transaccion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    cuotas: {
        type: DataTypes.INTEGER
    },
    tasas_compras: {
        type: DataTypes.STRING(50)
    },
    saldo_anterior: {
        type: DataTypes.DECIMAL(10, 2)
    },
    pago_minimo: {
        type: DataTypes.DECIMAL(10, 2)
    },
    pago_total: {
        type: DataTypes.DECIMAL(10, 2)
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    estado: {
        type: DataTypes.STRING(50)
    }
}, {
    tableName: 'Extracto',
    timestamps: false
});

// Establecer las relaciones
Tarjetas.hasMany(Extracto, { foreignKey: 'id_tarjeta' });
Extracto.belongsTo(Tarjetas, { foreignKey: 'id_tarjeta' });

module.exports = Extracto;
