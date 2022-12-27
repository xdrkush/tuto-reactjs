var MySQL = require("mysql");
const dbOptions = require("./db");

connectionPool = MySQL.createPool({ ...dbOptions });

var getConnection = function (done) {
  console.log("connection pool");
  connectionPool.getConnection(done);
};

module.exports = { getConnection: getConnection };
