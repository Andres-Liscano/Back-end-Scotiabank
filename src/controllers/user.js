const UserService = require("../services/user")

class UserController{
    static async getUserById(request, response){
        const userId = request.params.id
        const userResponse = await UserService.getUserById(userId)
        response.status(201).json(userResponse)
    }
}

module.exports = UserController