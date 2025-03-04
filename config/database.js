const { Sequelize } = require('sequelize');
require('dotenv').config(); 

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true, // Required for Supabase
            rejectUnauthorized: false, // Allow self-signed certs
        }
    },
    logging: false,
});

module.exports = { sequelize };

