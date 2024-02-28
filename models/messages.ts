import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/Database';

const Message = db.define(
    'Tb_Messages',
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true            
        },
        remitente:{
            type: DataTypes.STRING,
        },
        destinatario:{
            type: DataTypes.STRING,
        },
        sms:{
            type: DataTypes.STRING,
        },
        datanow:{
            type: DataTypes.STRING,
        },
        ficheiro:{
            type: DataTypes.STRING,
        }
    }
);

Message.sync();

export default Message;
