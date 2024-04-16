const Sequelize = require("sequelize")


const sequelize = new Sequelize("bd_call_center", "root", "admin123", {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

sequelize.authenticate().then(()=>{
    console.log('Conexion exitosa')
}).catch(error => {
    console.log('Conexion fallida', error)
})


module.exports = sequelize