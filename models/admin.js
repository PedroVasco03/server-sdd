const Sequelize = require('sequelize')
const db = require('../config/Database')

const Admin = db.define(
    'Tb_Admin',
    {
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,         
        },
        admin: {
            type: Sequelize.STRING,
        },
        senha: {
            type:Sequelize.STRING,
        },
        


    }
)
Admin.sync()
module.exports = Admin