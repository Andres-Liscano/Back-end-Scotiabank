const Usuario = require("../models/Usuarios")
const Clientes = require("../models/Clientes")
const Tarjetas = require("../models/Tarjetas")
const { where } = require("sequelize")

class TarjetaCupoCredito {
    static async getTarjetaCupoCreditoByIdClient(id) {
        const tarjeta = await Tarjetas.findAll({
             where: { id_cliente:id, tipo_tarjeta: 'Crédito'},
             attributes:['tipo_tarjeta', 'cupo_total', 'cupo_disponible'] });
        return tarjeta
    }

    static async getTarjetaCupoDebitoByIdClient(id) {
        const tarjeta = await Tarjetas.findAll({
             where: { id_cliente:id, tipo_tarjeta: 'Débito'},
             attributes:['tipo_tarjeta', 'saldo_actual'] });
        return tarjeta
    }
}

module.exports = TarjetaCupoCredito