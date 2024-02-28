const Sequelize = require('sequelize')
const db = require('../config/Database')

const Pedido = db.define(
    'Tb_Pedido',
    {
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true            
        },
        cliente:{
            type: Sequelize.STRING,
        },
        plano:{
            type: Sequelize.STRING,
        },
        telefone:{
            type: Sequelize.STRING,
        }, 
    }
)
Pedido.sync()
module.exports = Pedido