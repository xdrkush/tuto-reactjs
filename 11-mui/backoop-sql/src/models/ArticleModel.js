/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");

// Model
const Article = function (article) {
    this.id = article.id,
    this.title = article.title,
    this.price = article.price;
};

// Get All
Article.getAll = function (result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(`SELECT * FROM articles`, (error, data) => {
      if (error) throw error;
      result(null, data);
      // Mettre fin à la connexion avec la db
      conn.release();
    });
  });
};

// Get ID
Article.getById = function (id, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(`
        SELECT * FROM articles WHERE id = ${ id }
    `, (error, data) => {
      if (error) throw error;
      result(null, data);
      conn.release();
    });
  });
};

// Create
Article.create = function (newArticle, result) {
  const { title, price } = newArticle
  connection.getConnection(function (error, conn) {
    conn.query(`
        INSERT INTO articles SET title=:title, price=:price
    `, {title, price}, (error, data) => {
        if (error) throw error;
        conn.query(`SELECT * FROM articles`, (error, data) => {
          if (error) throw error;
          result(null, data);
          conn.release();
        });
      }
    );
  });
};

// Edit One
Article.editOne = function (articleObj, result) {
  const { title, price, id } = articleObj;
  console.log("edit", typeof articleObj.id);
  connection.getConnection(function (error, conn) {
    conn.query(`
        UPDATE articles 
            SET title = :title,
                price = :price
            WHERE id = :id;
      `, { title, price, id }, (error, data) => {
        if (error) throw error;
        conn.query(`SELECT * FROM articles`, (error, data) => {
          if (error) throw error;
          result(null, data);
        });
        conn.release();
      }
    );
  });
};

// Delete One
Article.deleteOne = function (id, result) {
  connection.getConnection(function (error, conn) {
    conn.query(`DELETE FROM articles WHERE id = ${id}`, (error, data) => {
      if (error) throw error;
      conn.query(`SELECT * FROM articles`, (error, data) => {
        if (error) throw error;
        result(null, data);
        conn.release();
      });
    });
  });
};

// Article
// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = Article;
