const sequelize = require('sequelize')
const Sequelize = sequelize
const db = new Sequelize('db_sistema', 'root', '12345',{
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = db