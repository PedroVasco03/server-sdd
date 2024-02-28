const { UUIDV4 } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../config/Database')

const Director = db.define(
    'Tb_Director',
    {
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true            
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        bi:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        telefone:{
            type: Sequelize.STRING,
            allowNull: false,
            
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            
        },
        sexo:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        senha:{
            type: Sequelize.STRING,
            allowNull: false,
            
        },
        permissao:{
            type: Sequelize.STRING,
            
        }
    }
)
Director.sync()
module.exports = Director