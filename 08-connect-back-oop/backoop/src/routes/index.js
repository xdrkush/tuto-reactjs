/*
 * Import Module
 * ************* */

const router = require("express").Router();

// Controllers
const ArticleControllers = require("../controllers/ArticleControllers");

// Middlewares
const TestMD = require("../middlewares/Test_md");

// Routes
router
  .route("/api/article")
  .get(new TestMD().firstMD, new ArticleControllers().getAll)
  .post(new ArticleControllers().create)
  .delete(new ArticleControllers().deleteAll);

// router.use(firstMD)
router
  .route("/api/article/:id")
  .get(new ArticleControllers().getId)
  .put(new ArticleControllers().editOne)
  .delete(new ArticleControllers().deleteOne);

module.exports = router;
