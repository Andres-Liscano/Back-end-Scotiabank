const Usuario = require("../models/Usuarios")
const Clientes = require("../models/Clientes")
const Tarjetas = require("../models/Tarjetas")
const { where } = require("sequelize")

class TarjetaCupoCredito {
    static async getTarjetaCupoByUserId(id) {
        const tarjeta = await Tarjetas.findOne({
             where: { id_tarjeta:id },
             attributes:['tipo_tarjeta', 'cupo_total', 'cupo_disponible'] });

        return tarjeta.dataValues
    }
}

module.exports = TarjetaCupoCredito