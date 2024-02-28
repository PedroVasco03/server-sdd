const Sequelize = require('sequelize')
const db = require('../config/Database')

const DiaSemana = db.define(
    'Tb_DiaSemana',
    {
        iddiasemana: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true            
        },
        diasemana:{
            type: Sequelize.STRING,
            allowNull: false
        },
    }
)
DiaSemana.sync()
module.exports = DiaSemana