const Article = require("../models/ArticleModel");

class ArticleControllers {
  async getAll(req, res) {
    try {
      Article.getAll((err, data) => {
        console.log("data res", data);
        if (err) {
          console.log("err", err),
          res.status(500).send({
            message: err.message || "Une erreur est survenue",
          });
        } else {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Article Success !",
            dbArticles: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async create(req, res) {
    console.log("controller create article", req.body);
    let newArticle = new Article({
      title: String(req.body.title),
      price: Number(req.body.price),
    });
    try {
      Article.create(newArticle, (err, data) => {
        if (err) res.send(err);
        return res.send({
          method: req.method,
          status: "success",
          flash: "Create Article Success !",
          dbArticles: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async editOne(req, res) {
    console.log("controller create article", req.body);
    let articleObj = new Article({
      id: Number(req.params.id),
      title: String(req.body.title),
      price: Number(req.body.price),
    });
    try {
      Article.editOne(articleObj, (err, data) => {
        if (err) res.send(err);
        return res.send({
          method: req.method,
          status: "success",
          flash: "Create Article Success !",
          dbArticles: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async getId(req, res) {
    try {
      Article.getById(String(req.params.id), (err, data) => {
        console.log("dataid res", data);
        if (err) {
          console.log("err", err),
          res.status(500).send({
            message: err.message || "Une erreur est survenue",
          });
        } else {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Article Success !",
            dbArticles: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(req, res) {
    try {
      Article.deleteOne(req.params.id, (err, data) => {
        if (err) res.send(err);
        else {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Article Success !",
            dbArticles: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteAll(req, res) {
    try {
      return res.send("OK");
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ArticleControllers;
