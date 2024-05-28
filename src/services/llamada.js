const { Sequelize, where } = require("sequelize");
const Llamadas = require("../models/Llamadas");


class LlamadaService {
    static async getLlamadaByEmpleadoId(id) {
        try {
            const result = await Llamadas.findOne({
                where: {
                    id_empleado: id,
                },
                attributes: [
                    [Sequelize.fn('SUM', Sequelize.literal(`CASE WHEN estado = 'Recibida' THEN 1 ELSE 0 END`)), 'num_llamadas_recibidas'],
                    [Sequelize.fn('SUM', Sequelize.literal(`CASE WHEN estado = 'Rechazada' THEN 1 ELSE 0 END`)), 'num_llamadas_rechazadas']
                ],
                group: ['id_empleado']
            });

            return result;
        } catch (error) {
            throw new Error('Error al obtener el resumen de llamadas.');
        }
    };

    static async getLlamadaPromByEmpleadoId(id) {
        try {
            const result = await Llamadas.findAll({ 
                where: {
                    id_empleado:id,
                },        
                attributes: [
                    'fecha_atencion',
                    [Sequelize.fn('AVG', Sequelize.col('duracion')), 'promedio_duracion']
                ],
                group: ['fecha_atencion']
            });

            return result;
        } catch (error) {
            throw new Error('Error al obtener el resumen de llamadas.');
        }
    };
}


module.exports = LlamadaService