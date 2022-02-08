const Connection = require("../config/ConnectionDB");
const Article = require("../models/ArticleModel");
const Category = require("../models/CategoryModel");

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

class ArticleControllers extends Connection {
  constructor() {
    super();
    privateProps.set(this.databaseConnection());
  }

  async getAll(req, res) {
    try {
      const dbArticles = await Article.find({}, [
        "title",
        "subtitle",
        "description",
        "author_id",
      ]);
      return res.send({
        method: req.method,
        status: "success",
        message: "Hello World",
        dbArticles,
      });
    } catch (error) {
      throw error;
    }
  }

  async getId(req, res) {
    try {
      const article = await Article.findById(req.params.id);
      return res.json({ message: "Voici votre article ID", article });
    } catch {
      throw error;
    }
  }

  async create(req, res) {
    try {
      const { title, description, subtitle, author_id, category_id } = req.body;
      console.log("req.body", req.body);
      if (title && description) {
        const category = await Category.findOne({ name: category_id });
        console.log("category", category);
        // On définit la construction de notre article
        const article = new Article({
          title,
          description,
          subtitle,
          author_id,
          category_id: category._id,
        });

        category.articles_id.push(article._id)

        // Et on sauvegarde nos modifications
        article.save((err) => {
          if (err) return handleError(err);
        });

        // Et on sauvegarde nos modifications
        category.save((err) => {
          if (err) return handleError(err);
        });

        return res.json({
          message: "Article cree avec success !",
          dbArticles: await Article.find(),
        });
      } else return res.json({ message: "Error, l'item n'as pas été créé !" });
    } catch (error) {
      throw error;
    }
  }

  async editOne(req, res) {
    try {
      console.log("put", req.query, req.body);
      Article.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        async (err, data) => {
          if (err) throw err;
          return res.json({
            message: "Item edit avec success !",
            dbArticles: await Article.find(),
          });
        }
      );
    } catch {
      throw error;
    }
  }

  async deleteOne(req, res) {
    try {
      console.log("delete", req.query, req.params.id);
      const ArticleId = await Article.findById(req.params.id);
      console.log("ArticleId DeleteOne", ArticleId);

      Article.findByIdAndDelete(req.params.id, async (err, data) => {
        if (err) throw err;
        return res.json({
          message: "Item delete avec success !",
          dbArticles: await Article.find(),
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteAll(req, res) {
    try {
      console.log("delete");
      await Article.deleteMany();

      return res.json({
        message: "Tout les items on été supprimer avec success !",
      });
    } catch {
      throw error;
    }
  }
}

module.exports = ArticleControllers;
