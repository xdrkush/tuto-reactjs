/*
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");

// Module
const bcrypt = require("bcrypt");

// Model
const User = function (user) {
  this.id = user.id,
  this.name = user.name,
  this.email = user.email,
  this.password = user.password,
  this.isVerified = user.isVerified,
  this.isAdmin = user.isAdmin;
};

// Get All
User.login = function (user, result) {
  console.log("Login controllers", user);
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    // check user if exist
    conn.query(
      `SELECT id, name, email, password, isAdmin, isVerified FROM users where name = "${user.name}"`,
      (error, data) => {
        if (error) throw error;
        console.log("User Model login", data[0], user);
        if (data.length <= 0) result(null, { message: 'error' });
        // bcrypt (Compare hash.body with hash.db)
        else bcrypt.compare(user.password, data[0].password, function(err, check) {
          if (err) throw err;
          console.log('check compare hash', check)
          if (check) result(null, data[0]);
          else result(null, { message: 'error' });
        });
        conn.release();
      }
    );
  });
};

// Get ID
User.register = function (newUser, result) {
  console.log("Register controllers");
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    // bcrypt
    bcrypt.hash(newUser.password, 10).then(function (hash) {
      // Store hash in your password DB.
      conn.query(
        `
        INSERT INTO users (name, email, password)
        VALUES ("${newUser.name}", "${newUser.email}", "${hash}")
    `,
        (error, data) => {
          if (error) throw error;
          result(null, data);
          conn.release();
        }
      );
    });
  });
};

// User
// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = User;
