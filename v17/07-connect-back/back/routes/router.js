/*
 * Import Module
 * ************* */

const express = require("express");
const router = express.Router();

// Controllers
const ArticleControllers = require("./controllers/articleControllers");
const CommentControllers = require("./controllers/commentControllers");

// Middleware
const MD_test = require('./middleware/test')
/*
 * Routes
 * ****** */

// Route Article '/article'
router.route("/article")
  .get(MD_test, ArticleControllers.getAll)
  .post(ArticleControllers.create)
  .delete(ArticleControllers.deleteAll);

// Route Article '/article/:id'
router.route("/article/:id")
  .get(ArticleControllers.getId)
  .put(ArticleControllers.editOne)
  .delete(ArticleControllers.deleteOne);

// Comment Route '/comment/:id'
router.route("/comment/:id")
  .post(CommentControllers.create);

module.exports = router;
