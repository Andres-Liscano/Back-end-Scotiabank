const Usuario = require("../models/Usuarios")
const Clientes = require("../models/Clientes")
const Tarjetas = require("../models/Tarjetas")
const { where } = require("sequelize")

class TarjetaService{
    static async getTarjetaByUserId(id){

        const user = await Usuario.findOne({
            where:{documento_identidad:id}, 
            attributes:['id_usuario', 'nombre', 'telefono']})

        const{id_usuario}=user.dataValues

        const client = await Clientes.findOne({
            where:{id_usuario},
            attributes:['id_cliente']
        })
      

        const{id_cliente}=client.dataValues    

        
        const tarjeta = await Tarjetas.findAll({
            where:{id_cliente},
            attributes:['id_tarjeta','id_cliente', 'saldo_actual', 'tipo_tarjeta', 'ultimos_movimientos']
        })

        if (!tarjeta){
            return null
        }
        return tarjeta
    }
}


module.exports = TarjetaService
