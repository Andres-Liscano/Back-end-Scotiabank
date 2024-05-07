const TarjetaService = require("../services/tarjeta")
const TarjetaCupoCredito = require("../services/tarjetaCupoCredito")

class TarjetaController{
    static async getTarjetaByUserId(request, response){
        const userId = request.params.id
        const userResponse = await TarjetaService.getTarjetaByUserId(userId)
        response.status(201).json(userResponse)
    }

    static async getTarjetaCupoByUserId(request, response){
        const tarjetaId = request.params.id
        const userResponse = await TarjetaCupoCredito.getTarjetaCupoByUserId(tarjetaId)
        response.status(201).json(userResponse)
    }
}

module.exports = TarjetaController