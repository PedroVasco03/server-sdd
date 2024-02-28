const Sequelize = require('sequelize')
const db = require('../config/Database')

const Stock = db.define(
    'Tb_Feedback',
    {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,         
        },
        nome: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
       mensagem: {
            type: Sequelize.TEXT,
        }


    }
)
Stock.sync()
module.exports = Stock