var MySQL = require("mysql");
const dbOptions = require("./db");

connectionPool = MySQL.createPool({ ...dbOptions });

connectionPool.config.connectionConfig.queryFormat = function (query, values) {
  console.log('Connection', query, values)
  if (!values) return query;
  return query.replace(/\:(\w+)/g, function (txt, key) {
    if (values.hasOwnProperty(key)) {
      return this.escape(values[key]);
    }
    return txt;
  }.bind(this));
};

var getConnection = function (done) {
  connectionPool.getConnection(done);
};

module.exports = { getConnection };
