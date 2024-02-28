const Sequelize = require('sequelize')
const db = require('../config/Database')

const Turma = db.define(
    'Tb_Turma',
    {
        idTurma: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true            
        },
        Turma:{
            type: Sequelize.STRING,
            allowNull: false
        },
    }
)
Turma.sync().then(function(){})
module.exports = Turma