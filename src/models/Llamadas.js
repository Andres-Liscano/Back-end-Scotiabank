const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');
const Cliente = require('./Clientes');
const Empleado = require('./Empleados');

const Llamada = sequelize.define('Llamada', {
    id_llamada: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fecha_atencion: {
        type: DataTypes.DATE
    },
    tipo_atencion: {
        type: DataTypes.STRING(50)
    },
    descripcion: {
        type: DataTypes.TEXT
    }
});

Llamada.belongsTo(Cliente, { foreignKey: 'id_cliente' });
Llamada.belongsTo(Empleado, { foreignKey: 'id_empleado' });

module.exports = Llamada;
