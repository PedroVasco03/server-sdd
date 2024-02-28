const Sequelize = require('sequelize')
const db = require('../config/Database')

const Curso = db.define(
    'Tb_Curso',
    {
        idcurso: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true            
        },
        curso:{
            type: Sequelize.STRING,
            allowNull: false
        },
    }
)
Curso.sync()
module.exports = Curso