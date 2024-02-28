import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/Database';

const Pedido = db.define(
    'Tb_Pedido',
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true            
        },
        cliente:{
            type: DataTypes.STRING,
        },
        plano:{
            type: DataTypes.STRING,
        },
        telefone:{
            type: DataTypes.STRING,
        }, 
    }
);

Pedido.sync();

export default Pedido;
