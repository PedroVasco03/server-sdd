const Sequelize = require('sequelize')
const db = require('../config/Database')

const IntegranteCoordenacao = db.define(
    'Tb_IntegrantesCoordenacao',
    {
        idcoordenacao:{
            type: Sequelize.INTEGER,
            allowNull: false,
                        
        },
        idcoordenador:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idelemento:{
            type: Sequelize.INTEGER,
            allowNull: false
        }

        

    }
)
IntegranteCoordenacao.sync()
module.exports = IntegranteCoordenacao