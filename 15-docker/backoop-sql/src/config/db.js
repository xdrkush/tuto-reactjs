require('dotenv').config()

const dbOptions = {
    connectionLimit : 100,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.PORT_MYSQL,
    database: process.env.MYSQL_DATABASE,
    debug : false
};

module.exports = dbOptions;
