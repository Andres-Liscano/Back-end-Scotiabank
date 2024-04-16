const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');

const Usuario = sequelize.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(50)
    },
    apellido: {
        type: DataTypes.STRING(50)
    },
    documento_identidad: {
        type: DataTypes.STRING(50)
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    },
    direccion: {
        type: DataTypes.STRING(100)
    },
    correo_electronico: {
        type: DataTypes.STRING(50)
    },
    telefono: {
        type: DataTypes.STRING(20)
    }
});

module.exports = Usuario;
