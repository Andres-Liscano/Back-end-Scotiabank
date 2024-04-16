const Usuario = require("../models/Usuarios")

class UserService{
    static async getUserById(id){
        const user = await Usuario.findOne({
            where:{documento_identidad:id}, 
            attributes:['id_usuario', 'nombre', 'telefono']})
        if (user){
            return user
        }
        return null
    }
}

module.exports = UserService