import { DataTypes, Model } from 'sequelize';
import db from '../config/Database';

interface AdminAttributes {
    id: string;
    admin: string;
    senha: string;
}

class Admin extends Model<AdminAttributes> {}

Admin.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        admin: {
            type: DataTypes.STRING,
        },
        senha: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: db,
        modelName: 'Tb_Admin',
    }
);

Admin.sync();

export default Admin;
