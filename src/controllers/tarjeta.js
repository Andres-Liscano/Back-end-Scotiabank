const TarjetaService = require("../services/tarjeta")

class TarjetaController{
    static async getTarjetaByUserId(request, response){
        const userId = request.params.id
        const userResponse = await TarjetaService.getTarjetaByUserId(userId)
        response.status(201).json(userResponse)
    }
}

module.exports = TarjetaController