/*
 * Import Module
 * ************* */

const router = require("express").Router();

// Controllers
const ArticleControllers = require("../controllers/ArticleControllers");
const AuthControllers = require("../controllers/AuthControllers");

// Middlewares
const TestMD = require("../middlewares/Test_md");
const TokenJWT = require("../middlewares/Token_jwt");

/*
 * Routes
 * ****** */

// Test
router.get('/api', (req, res) => res.send('shirow'))

// Article
router
  .route("/api/article")
  .get(new TestMD().firstMD, new ArticleControllers().getAll)
  .post(new ArticleControllers().create)
  .delete(new ArticleControllers().deleteAll);

// Article ID
router
  .route("/api/article/:id")
  .get(new ArticleControllers().getId)
  .put(new ArticleControllers().editOne)
  .delete(new ArticleControllers().deleteOne);

// Authentification
router.route("/api/login").post(new AuthControllers().login);
router.route("/api/register").post(new AuthControllers().register);

// router.use(new TokenJWT().checkIsValid)
// Session
router
  .route("/api/auth/:token")
  .get(new TokenJWT().checkIsValid, new AuthControllers().checkToken);

/*
 * / Routes
 * ******** */

module.exports = router;
