const express = require("express")
const cors = require("cors")
const sequelize = require("./dbconfig")
const app = express()
const PORT = 3001
const UserController = require("./controllers/user")

app.use(cors())

//endpoint Usuarios
app.get('/user/:id', UserController.getUserById)

sequelize.sync().then(()=>{
    console.log('Modelos sincronizados')
}).catch(error => {
    console.log('Error al sincronizar', error)
})

app.listen(PORT,()=>{
    console.log(`Servidor inicializando en http://localhost:${PORT}`)
})