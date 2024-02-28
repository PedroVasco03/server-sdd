const { Sequelize } = require('sequelize')
const sequelize = require('sequelize')

const db = require('../config/Database')



const horarioCoordenacao = db.define(
    'Tb_HCoordenacao',{
    idcoordenador:{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    diasemana:{
        type: Sequelize.STRING,
        
    },
    inicio:{
        type: Sequelize.STRING,
       
    },
    fim: {
        type: Sequelize.STRING,
        
    },
    limite:{
        type: Sequelize.INTEGER,
       
    }
},

)

horarioCoordenacao.sync()

module.exports = horarioCoordenacao

