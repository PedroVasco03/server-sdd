const Sequelize = require('sequelize')
const db = require('../config/Database')

const Message = db.define(
    'Tb_Messages',
    {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true            
        },
        remitente:{
            type: Sequelize.STRING,
        },
        destinatario:{
            type: Sequelize.STRING,
        },
        sms:{
            type: Sequelize.STRING,
        },
        datanow:{
            type: Sequelize.STRING,
        },
        ficheiro:{
            type: Sequelize.STRING,
        }
    }
)
Message.sync()
module.exports = Message