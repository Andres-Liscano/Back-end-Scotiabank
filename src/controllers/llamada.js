const LlamadaService = require("../services/llamada")


class LLamadaEmpleadoController {
    static async getLlamadaByEmpleadoId(request, response) {
        try {
            const llamadaId = request.params.id
            const userResponse = await LlamadaService.getLlamadaByEmpleadoId(llamadaId)
            response.status(201).json(userResponse)
        } catch (e) {
            console.error(e)
            response.status(500).json({ message: "error en el servidor" })
        }
    }

    static async getLlamadaPromByEmpleadoId(request, response) {
        try {
            const llamadaId = request.params.id
            const userResponse = await LlamadaService.getLlamadaPromByEmpleadoId(llamadaId)
            response.status(201).json(userResponse)
        } catch (e) {
            console.error(e)
            response.status(500).json({ message: "error en el servidor" })
        }
    }
   
}

module.exports = LLamadaEmpleadoController