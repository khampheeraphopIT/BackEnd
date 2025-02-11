require('dotenv').config();

module.exports = {
   Host: process.env.DB_HOST || 'localhost',
   User: process.env.DB_USER || 'root',
   Password: process.env.DB_PASSWORD || '1234',
   DB: process.env.DB || 'ManyToMany_db',
   dialect: 'mysql',
   port:3306,
   pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
   }
}