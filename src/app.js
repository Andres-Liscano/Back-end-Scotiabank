const express = require("express")
const cors = require("cors")
const sequelize = require("./dbconfig")
const app = express()
const PORT = 3001
const UserController = require("./controllers/user")
const TarjetaController = require("./controllers/tarjeta")
const ExtractoController = require("./controllers/extracto")

app.use(cors())

//endpoint Usuarios
app.get('/user/:id', UserController.getUserById)

app.get('/tarjetas/:id', TarjetaController.getTarjetaByUserId)

app.get('/tarjetas/cupo-credito/:id', TarjetaController.getTarjetaCupoCreditoByIdClient)
app.get('/tarjetas/cupo-debito/:id', TarjetaController.getTarjetaCupoDebitoByIdClient)
app.get('/extracto/:id', ExtractoController.getExtractoByTarjetaId)

sequelize.sync().then(()=>{
    console.log('Modelos sincronizados')
}).catch(error => {
    console.log('Error al sincronizar', error)
})

app.listen(PORT,()=>{
    console.log(`Servidor inicializando en http://localhost:${PORT}`)
})