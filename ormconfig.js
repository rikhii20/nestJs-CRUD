require('dotenv').config();

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  dropSchema: false,
  entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
};
