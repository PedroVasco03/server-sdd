const Sequelize = require('sequelize')
const db = require('../config/Database')

const Coordenacao = db.define(
    'Tb_Coordenacao',
     {
        idcoordenacao:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: false
        },
        idcoordenador:{
            type: Sequelize.STRING,
            allowNull: false
        }
     }
    )
    Coordenacao.sync()
    module.exports = Coordenacao