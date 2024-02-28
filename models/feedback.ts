import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/Database';

const Stock = db.define(
    'Tb_Feedback',
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,         
        },
        nome: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
       mensagem: {
            type: DataTypes.TEXT,
        }
    }
);

Stock.sync();

export default Stock;
