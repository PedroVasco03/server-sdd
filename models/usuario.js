const Sequelize = require('sequelize')
const db = require('../config/Database')

const Usuario = db.define(
    'Tb_Usuario',
    {
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,         
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type:Sequelize.STRING,
            
        },
        contacto: {
            type:Sequelize.STRING,
            
        },
        municipio: {
            type:Sequelize.STRING,
            
        },
        bairro: {
            type:Sequelize.STRING,
            
        },
        rua: {
            type:Sequelize.STRING,
            
        },
        senha: {
            type:Sequelize.STRING,
            
        },
        permissao: {
            type: Sequelize.STRING
        }
    }
)
Usuario.sync()
module.exports = Usuario