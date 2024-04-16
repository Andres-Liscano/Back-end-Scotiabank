const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');
const Usuario = require('./Usuarios');

const Cliente = sequelize.define('Cliente', {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
});

Cliente.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Cliente;
