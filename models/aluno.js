const Sequelize = require('sequelize')
const db = require('../config/Database')

const Aluno = db.define(
    'Tb_Aluno',
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
        area:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        curso:{
            type: Sequelize.STRING,
            allowNull: false,
            
        },
        turma:{
            type: Sequelize.STRING,
            allowNull: false,
            
        },
        classe:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        numeroprocesso:{
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
Aluno.sync()
module.exports = Aluno