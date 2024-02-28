const Sequelize = require('sequelize')
const db = require('../config/Database')

const Admin = db.define(
    'Tb_Admin',
    {
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,         
        },
        administrador: {
            type: Sequelize.STRING,
            allowNull: false
        },
        senha: {
            type:Sequelize.STRING,
            allowNull: false
        },
        


    }
)
Admin.sync()
module.exports = Admin