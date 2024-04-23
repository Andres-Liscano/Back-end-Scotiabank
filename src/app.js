const express = require("express")
const cors = require("cors")
const sequelize = require("./dbconfig")
const app = express()
const PORT = 3001
const UserController = require("./controllers/user")
const TarjetaController = require("./controllers/tarjeta")

app.use(cors())

//endpoint Usuarios
app.get('/user/:id', UserController.getUserById)

app.get('/tarjetas/:id', TarjetaController.getTarjetaByUserId)

sequelize.sync().then(()=>{
    console.log('Modelos sincronizados')
}).catch(error => {
    console.log('Error al sincronizar', error)
})

app.listen(PORT,()=>{
    console.log(`Servidor inicializando en http://localhost:${PORT}`)
})