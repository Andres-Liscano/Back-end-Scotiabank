const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');
const Usuario = require('./Usuarios');

const Empleado = sequelize.define('Empleado', {
    id_empleado: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    puesto: {
        type: DataTypes.STRING(50)
    }
});

Empleado.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Empleado;

