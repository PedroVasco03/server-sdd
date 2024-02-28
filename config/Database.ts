import { Sequelize } from 'sequelize';

const db = new Sequelize('db_distribuidora', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
