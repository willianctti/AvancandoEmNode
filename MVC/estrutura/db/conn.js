const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('COnectamos ao MySQL!')



}   catch(error) {
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize