require('dotenv').config()

const dbOptions = {
    connectionLimit : 100,
    host: process.env.HOST,
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    port: process.env.PORT_MYSQL,
    database: process.env.DATABASE,
    debug : false
};

module.exports = dbOptions;
