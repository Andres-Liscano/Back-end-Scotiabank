const Extracto = require("../models/Extracto")


class ExtractoService {
    static async getExtractoByTarjetaId(id) {
        const tarjeta = await Extracto.findAll({
             where: { id_tarjeta:id},
             attributes:['fecha_transaccion', 'monto', 'cuotas','tasas_compras','saldo_anterior','pago_minimo','pago_total', 'descripcion','estado'] });
        return tarjeta
    }

   
}

module.exports = ExtractoService