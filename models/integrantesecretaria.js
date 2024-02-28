const { Sequelize } = require("sequelize")
const db = require('../config/Database')
const SecretariaIntegrante = db.define(
    'Tb_SecretariaIntegrante',
    {
        idsecretaria: {
            type: Sequelize.INTEGER,
            allowNull: false,         
        },
        iddirector:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idelemento:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }
)
SecretariaIntegrante.sync()
module.exports = SecretariaIntegrante