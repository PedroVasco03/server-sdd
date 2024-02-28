const Sequelize = require('sequelize')
const db = require('../config/Database')

const Secretaria = db.define(
    'Tb_Secretaria',
    {
        idsecretaria: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true            
        },
        iddirector:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: false
        },
    }
)
Secretaria.sync()
module.exports = Secretaria