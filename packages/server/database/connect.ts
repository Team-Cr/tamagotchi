import { Sequelize, type SequelizeOptions } from 'sequelize-typescript';
import path from 'path';
import { User } from '../models/User';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } = process.env;

const sequelizeOption: SequelizeOptions = {
  host: POSTGRES_HOST || 'localhost',
  port: +(POSTGRES_PORT || 5432),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOption);

// TODO add models
const modelsPath = path.join(__dirname, '../models');
sequelize.addModels([modelsPath]);

export async function dbConnect() {
  try {
    await sequelize.authenticate(); // Проверка аутентификации в БД
    await sequelize.sync(); // Синхронизация базы данных
    await User.create({
      id: '3',
      name: 'test',
    });
    console.log(await User.findAll());
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
