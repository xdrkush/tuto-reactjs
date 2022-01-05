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
    });
  });
};

// Create
Article.create = function (newArticle, result) {
  connection.getConnection(function (error, conn) {
    conn.query(`
        INSERT INTO articles (title, price)
        VALUES ("${newArticle.title}", ${newArticle.price})
    `, (error, data) => {
        if (error) throw error;
        conn.query(`SELECT * FROM articles`, (error, data) => {
          if (error) throw error;
          result(null, data);
        });
      }
    );
  });
};

// Edit One
Article.editOne = function (articleObj, result) {
  console.log("edit", typeof articleObj.id);
  connection.getConnection(function (error, conn) {
    conn.query(`
        UPDATE articles 
            SET title = '${articleObj.title}',
                price = ${articleObj.price}
            WHERE id = ${articleObj.id};
      `, (error, data) => {
        if (error) throw error;
        conn.query(`SELECT * FROM articles`, (error, data) => {
          if (error) throw error;
          result(null, data);
        });
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
      });
    });
  });
};

// Article
// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = Article;
