const Connection = require("../config/ConnectionDB");
const Article = require("../models/ArticleModel");

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

class ArticleControllers extends Connection {
  constructor () {
    super();
    privateProps.set(this.databaseConnection());
  }

  async getAll (req, res) {
    try {
      const dbArticles = await Article.find();
      return res.send({
        method: req.method,
        status: "success",
        flash: "Hello World",
        dbArticles,
      });
    } catch (error) {
      throw error;
    }
  }

  async create (req, res) {
    try {
      const b = req.body;
      console.log("req.body", req.body);
      if (b.title && b.price) {
        // On définit la construction de notre article
        const article = new Article({
          title: b.title,
          price: b.price,
        });

        // Et on sauvegarde nos modifications
        article.save((err) => {
          if (err) return handleError(err);
        });

        return res.json({
          flash: "Item cree avec success !",
          dbArticles: await Article.find().populate("comment")
        });
      } else return res.json({ message: "Error, l'item n'as pas été créé !" });
    } catch {
      throw error;
    }
  }

  async editOne (req, res) {
    try {
      console.log("put", req.query, req.body);
      Article.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        async (err, data) => {
          if (err) throw err;
          return res.json({
            flash: "Item edit avec success !",
            dbArticles: await Article.find().populate("comment"),
          });
        }
      );
    } catch {
      throw error;
    }
  }

  async getId (req, res) {
    try {
      const article = await Article.findById(req.params.id).populate("comment");
      return res.json({ flash: "Voici votre article ID", article });
    } catch {
      throw error;
    }
  }

  async deleteOne (req, res) {
    try {
      console.log("delete", req.query, req.params.id);
      const ArticleId = await Article.findById(req.params.id);
      console.log("ArticleId DeleteOne", ArticleId);

      if (ArticleId.comment.length > 0) {
        for (let i = 0; i < ArticleId.comment.length; i++) {
          console.log(
            "Le commentaire de " +
              ArticleId.comment[i].author +
              " à bien été supprimer !"
          );
          await Comment.findByIdAndDelete(ArticleId.comment[i]._id);
        }

        Article.findByIdAndDelete(req.params.id, async (err, data) => {
          if (err) throw err;
          return res.json({
            flash:
              "les comments à été supprimer avec success et l'article aussi !",
            dbArticles: await Article.find().populate("comment"),
          });
        });
      } else {
        Article.findByIdAndDelete(req.params.id, async (err, data) => {
          if (err) throw err;
          return res.json({
            flash: "Item delete avec success !",
            dbArticles: await Article.find().populate("comment"),
          });
        });
      }
    } catch {
      throw error;
    }
  }

  async deleteAll (req, res) {
    try {
      console.log("delete");
      const dbArticle = await Article.find().populate("comment");

      async function delCom(id) {
        // await Comment.deleteMany({ _id: e._id });
      }

      dbArticle.forEach((i) => {
        console.log("db", i);
      });

      //   await Article.deleteMany();

      return res.json({
        message: "Tout les items on été supprimer avec success !",
      });
    } catch {
      throw error;
    }
  }
}

module.exports = ArticleControllers;
