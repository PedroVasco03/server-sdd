const Sequelize = require('sequelize')
const db = require('../config/Database')

const ReclamacaoAluno = db.define(
    'Tb_ReclamacaoAluno',
    {   
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true            
        },
        para:{
            type: Sequelize.STRING,
            allowNull: false
        },
        idsenha:{
            type: Sequelize.STRING,
            allowNull: false
        },
        idaluno:{
            type: Sequelize.STRING,
            allowNull: false
        },
        diasemana:{
            type: Sequelize.STRING,
            allowNull: false
        },
        hora:{
            type: Sequelize.STRING,
            allowNull: false
        },
        mensagem:{
            type: Sequelize.STRING, 
            allowNull: false
        }
    }
)
ReclamacaoAluno.sync()
module.exports = ReclamacaoAluno