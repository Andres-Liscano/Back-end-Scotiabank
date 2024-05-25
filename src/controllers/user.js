const UserService = require("../services/user")

class UserController{
    static async getUserById(request, response){
       try{
        const userId = request.params.id
        const userResponse = await UserService.getUserById(userId)
        response.status(201).json(userResponse)
       }catch(e){
        response.status(500).json({message: 'Error en el servidor'})
       }
    }
}

module.exports = UserController