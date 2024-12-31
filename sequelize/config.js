const {Sequelize}= require('sequelize')

const sequelize = new Sequelize ({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Publication',
    database: 'BookStore',
    port: 5432,
    logging: false,
    define: {
        timestamps: false
        }

});

module.exports = sequelize;