const Sequelize = require('sequelize')
const db = require('../config/Database')

const Funcionario = db.define(
    'Tb_Funcionario',
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
Funcionario.sync()
module.exports = Funcionario