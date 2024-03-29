import { Sequelize, type SequelizeOptions } from 'sequelize-typescript';
import path from 'path';
import { Forum } from '../models/Forum';
import { THEME, Theme } from '../models/Theme';

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

const modelsPath = path.join(__dirname, '../models');
sequelize.addModels([modelsPath]);
console.log(sequelizeOption);

export async function dbConnect() {
  try {
    await sequelize.authenticate(); // Проверка аутентификации в БД
    await sequelize.sync(); // Синхронизация базы данных

    const forums = await Forum.findAll();
    if (!forums.length) {
      await Forum.bulkCreate([{ title: 'Game rules' }, { title: 'Bugs' }, { title: 'FAQ' }]);
    }
    const themes = await Theme.findAll();
    if (!themes.length) {
      await Theme.bulkCreate([
        { id: 1, name: THEME.LIGHT },
        { id: 2, name: THEME.DARK },
      ]);
    }
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
