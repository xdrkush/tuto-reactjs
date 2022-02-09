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
        "category_id",
      ]).populate("category_id");
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

        category.articles_id.push(article._id);

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
          dbArticles: await Article.find({}, [
            "title",
            "subtitle",
            "description",
            "author_id",
            "category_id",
          ]).populate("category_id"),
        });
      } else return res.json({ message: "Error, l'item n'as pas été créé !" });
    } catch (error) {
      throw error;
    }
  }

  async editOne(req, res) {
    try {
      const { category_id } = req.body;
      console.log("put", req.params, req.body);
      let article = await Article.findById(req.params.id);
      const oldCategory = await Category.findById(article.category_id.toString().replace(/ObjectId\("(.*)"\)/, "$1"));
      let category;
      if (category_id) category = await Category.findOne({ name: category_id });
      if (category_id === "") category = oldCategory;

      console.log("category", category, article, oldCategory);

      if (category && article) {
        console.log("testdze", oldCategory);
        if (oldCategory.articles_id) oldCategory.articles_id.pull(article._id);
        category.articles_id.push(article._id);

        // if (title.length > 0) article.title = title
        // if (subtitle.length > 0) article.subtitle = subtitle
        // if (description.length > 0) article.description = description
        // change category to article
        article.category_id = String(
          category._id.toString().replace(/ObjectId\("(.*)"\)/, "$1")
        );

        // Et on sauvegarde nos modifications
        article.save((err) => {
          if (err) return handleError(err);
        });
        oldCategory.save((err) => {
          if (err) return handleError(err);
        });
        category.save((err) => {
          if (err) return handleError(err);
        });

        return res.json({
          message: "Article edit avec success !",
          dbArticles: await Article.find({}, [
            "title",
            "subtitle",
            "description",
            "author_id",
            "category_id",
          ]).populate("category_id"),
        });
      } else
        return res.json({
          message: "Article edit ERROR !",
          dbArticles: await Article.find({}, [
            "title",
            "subtitle",
            "description",
            "author_id",
            "category_id",
          ]).populate("category_id"),
        });
    } catch (error) {
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
