require('dotenv').config();

const config= {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 4000,
    dbuser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbhost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT
}

module.exports = {config};
