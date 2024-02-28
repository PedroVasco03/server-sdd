const Sequelize = require('sequelize')
const db = require('../config/Database')

const Classe = db.define(
    'Tb_Classe',
    {
        idclasse: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true            
        },
        classe:{
            type: Sequelize.STRING,
            allowNull: false
        },
    }
)
Classe.sync()
module.exports = Classe