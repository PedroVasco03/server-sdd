const Sequelize = require('sequelize')
const db = require('../config/Database')

const Mensagem = db.define(
    'Tb_Mensagens',
     {
        idEnviar:{
            type: Sequelize.STRING,
           
        },

        idEnviado:{
            type: Sequelize.STRING,
            
        },
        mensagem:{
            type: Sequelize.STRING,
            
        }
     }
    )
    Mensagem.sync()
    module.exports = Mensagem