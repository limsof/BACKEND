const {Sequelize} = require('sequelize');

const {config} = require('../config/config');
const setupModels = require('../db/models');

const sequelize = new Sequelize(
    config.dbName,
    config.dbuser,
    config.dbPassword,
    {
        host:config.dbhost,
        dialect: 'postgres'
    }
);
setupModels(sequelize);

sequelize.sync({force:false})
.then(() => {
    console.log('Database & tables created!');
})
.catch((error) => {
    console.error('Unable to create tables, shutting down...', error);
});




module.exports = sequelize