const sequelize = require('sequelize')
const Sequelize = sequelize
const db = new Sequelize('db_distribuidora', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = db