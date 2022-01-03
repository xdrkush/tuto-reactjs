/*
 * Article Controllers
 * ****************** */

// Import Model
const Article = require("../../models/ArticleModel");
const Comment = require("../../models/CommentModel");

// GetAll
exports.getAll = async (req, res) => {
  const dbArticles = await Article.find().populate("comment");
  console.log("getAll Articles");
  res.json({ flash: "Hello World", dbArticles });
};

// Create
exports.create = async (req, res) => {
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

    res.json({
      flash: "Item cree avec success !",
      dbArticles: await Article.find().populate("comment")
    });
  } else res.json({ message: "Error, l'item n'as pas été créé !" });
};

// EditOne
exports.editOne = (req, res) => {
  console.log("put", req.query, req.body);
  Article.findByIdAndUpdate(req.params.id, { ...req.body }, async (err, data) => {
    if (err) throw err;
    res.json({
      flash: "Item edit avec success !",
      dbArticles: await Article.find().populate("comment")
    });
  });
};

exports.getId = async (req, res) => {
  const article = await Article.findById(req.params.id).populate("comment");
  res.json({ flash: "Voici votre article ID", article });
};

exports.deleteOne = async (req, res) => {
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
      res.json({
        flash: "les comments à été supprimer avec success et l'article aussi !",
        dbArticles: await Article.find().populate("comment")
      });
    });
  } else {
    Article.findByIdAndDelete(req.params.id, async (err, data) => {
      if (err) throw err;
      res.json({
        flash: "Item delete avec success !",
        dbArticles: await Article.find().populate("comment")
      });
    });
  }
};

exports.deleteAll = async (req, res) => {
  console.log("delete");
  const dbArticle = await Article.find().populate("comment");

  async function delCom(id) {
    // await Comment.deleteMany({ _id: e._id });
  }

  dbArticle.forEach((i) => {
    console.log("db", i);
  });

  //   await Article.deleteMany();

  res.json({ message: "Tout les items on été supprimer avec success !" });
};
