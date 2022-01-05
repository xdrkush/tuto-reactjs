/*
 * Comment Controllers
 * ****************** */

// Import des models
const Article = require("../../models/ArticleModel");
const Comment = require("../../models/CommentModel");

exports.create = async (req, res) => {
  const b = req.body;
  console.log("Comment: req.body", req.body, req.params);

  if (b.content && b.author && req.params.id) {
    // On définit la construction de notre article
    const comment = new Comment({
      ...req.body,
      parent: req.params.id,
    });

    console.log("_id comment", comment, comment._id);

    // Et on sauvegarde nos modifications
    comment.save((err) => {
      if (err) return handleError(err);
    });

    // Récupéré les anciens commentaires
    const ArticleId = await Article.findById(req.params.id);
    console.log("ArticleID 1", ArticleId.comment);
    ArticleId.comment.push(comment._id);
    console.log("ArticleID 2", ArticleId.comment);

    Article.findByIdAndUpdate(
      req.params.id,
      {
        comment: ArticleId.comment,
      },
      (err, data) => {
        if (err) throw err;
        return res.json({ message: "comment cree avec success !", data: comment });
      }
    );
  } else return res.json({ message: "Error, l'comment n'as pas été créé !" });
};
