import { DataTypes, Model, UUIDV4 } from 'sequelize';
import db from '../config/Database';

interface UsuarioAttributes {
    id: string;
    nome: string;
    email: string | null;
    contacto: string | null;
    municipio: string | null;
    bairro: string | null;
    rua: string | null;
    senha: string | null;
    permissao: string;
}

class Usuario extends Model<UsuarioAttributes> implements UsuarioAttributes {
    public id!: string;
    public nome!: string;
    public email!: string | null;
    public contacto!: string | null;
    public municipio!: string | null;
    public bairro!: string | null;
    public rua!: string | null;
    public senha!: string | null;
    public permissao!: string;
}

Usuario.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
        },
        contacto: {
            type: DataTypes.STRING,
        },
        municipio: {
            type: DataTypes.STRING,
        },
        bairro: {
            type: DataTypes.STRING,
        },
        rua: {
            type: DataTypes.STRING,
        },
        senha: {
            type: DataTypes.STRING,
        },
        permissao: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: db,
        modelName: 'Tb_Usuario',
    }
);

export default Usuario;
