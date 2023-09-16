import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'benoerjb', // db name
  'benoerjb', // username
  'CWR6iUkB0Uayj69VkQIeaRMygDprSrOJ', // password
  {
    host: 'hansken.db.elephantsql.com',
    dialect: 'postgres',
  }
);
