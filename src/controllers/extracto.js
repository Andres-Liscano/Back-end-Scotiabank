const ExtractoService = require("../services/extracto")


class ExtractoController {
    static async getExtractoByTarjetaId(request, response) {
        try {
            const tarjetaId = request.params.id
            const userResponse = await ExtractoService.getExtractoByTarjetaId(tarjetaId)
            response.status(201).json(userResponse)
        } catch (e) {
            console.error(e)
            response.status(500).json({ message: "error en el servidor" })
        }
    }

   
}

module.exports = ExtractoController