/*
 * Import Module
 * ************* */

const router = require("express").Router();

// Controllers
const ArticleControllers = require("../controllers/ArticleControllers");
const CategoryControllers = require("../controllers/CategoryControllers");
const MessageControllers = require("../controllers/MessageControllers");
const UserControllers = require("../controllers/UserControllers");

// Middlewares
const TestMD = require("../middlewares/Test_md");

router.get("/api", (req, res) => {
  res.send("!!!");
});

// Routes
router
  .route("/api/article")
  .get(new TestMD().firstMD, new ArticleControllers().getAll)
  .post(new ArticleControllers().create)
  .delete(new ArticleControllers().deleteAll);

router
  .route("/api/article/:id")
  .get(new ArticleControllers().getId)
  .put(new ArticleControllers().editOne)
  .delete(new ArticleControllers().deleteOne);

router
  .route("/api/category")
  .get(new CategoryControllers().getAll)
  .post(new CategoryControllers().create)
  .delete(new CategoryControllers().deleteAll);

router
  .route("/api/category/:id")
  .get(new CategoryControllers().getId)
  .put(new CategoryControllers().editOne)
  .delete(new CategoryControllers().deleteOne);

router
  .route("/api/message")
  .get(new MessageControllers().getAll)
  .post(new MessageControllers().create)
  .delete(new MessageControllers().deleteAll);

router
  .route("/api/message/:id")
  .get(new MessageControllers().getId)
  .put(new MessageControllers().editOne)
  .delete(new MessageControllers().deleteOne);

router
  .route("/api/users")
  .get(new UserControllers().getAll)
  .delete(new UserControllers().deleteAll);

router
  .route("/api/users/:id")
  .get(new UserControllers().getId)
  .put(new UserControllers().editOne)
  .delete(new UserControllers().deleteOne);

router.route("/api/login").post(new UserControllers().login); // Connected
router.route("/api/register").post(new UserControllers().register); // Register
router.route("/api/checkauth/:token").get(new UserControllers().checkAuth); // Check session

module.exports = router;
