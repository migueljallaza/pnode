import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'railway', // db name
  'postgres', // username
  '5GCg6Ec5bGf3**bb6dG5DafCF5cG-CG6', // password
  {
    host: 'viaduct.proxy.rlwy.net:26587',
    dialect: 'postgres',
  }
);
