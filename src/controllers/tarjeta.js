const TarjetaService = require("../services/tarjeta")
const TarjetaCupoCredito = require("../services/tarjetaCupoCredito")

class TarjetaController {
    static async getTarjetaByUserId(request, response) {
        try {
            const userId = request.params.id
            const userResponse = await TarjetaService.getTarjetaByUserId(userId)
            response.status(201).json(userResponse)
        } catch (e) {
            response.status(500).json({ message: "error en el servidor" })
        }
    }

    static async getTarjetaCupoCreditoByIdClient(request, response) {
        try {
            const clientId = request.params.id
            const userResponse = await TarjetaCupoCredito.getTarjetaCupoCreditoByIdClient(clientId)
            response.status(201).json(userResponse)
        }
        catch (e) {
            response.status(500).json({ message: "error en el servidor" })

        }
    }

    static async getTarjetaCupoDebitoByIdClient(request, response) {
        try {
            const clientId = request.params.id
            const userResponse = await TarjetaCupoCredito.getTarjetaCupoDebitoByIdClient(clientId)
            response.status(201).json(userResponse)
        }
        catch (e) {
            response.status(500).json({ message: "error en el servidor" })

        }
    }
}

module.exports = TarjetaController