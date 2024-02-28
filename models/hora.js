const Sequelize = require('sequelize')
const db = require('../config/Database')

const Hora = db.define(
    'Tb_Hora',
    {
        idhora: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true            
        },
        hora:{
            type: Sequelize.TIME,
            allowNull: false
        },
    }
)
Hora.sync()
module.exports = Hora