const Sequelize = require('sequelize')
const db = require('../config/Database')

const HorarioSecretaria = db.define(
    'Tb_HSecretaria',{
    idhorario: {
        type:  Sequelize.STRING,
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


})
//criar a tabela no banco de dados
HorarioSecretaria.sync()

//HorarioCoordenacao.sync({alter: true})

module.exports = HorarioSecretaria