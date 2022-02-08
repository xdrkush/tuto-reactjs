const Connection = require("../config/ConnectionDB");
const Category = require("../models/CategoryModel");

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

class CategoryControllers extends Connection {
  constructor() {
    super();
    privateProps.set(this.databaseConnection());
  }

  async getAll(req, res) {
    try {
      const dbCategory = await Category
          .find({}, [
            "name",
            "icon",
            "articles_id",
          ])
          .populate("articles_id");

      console.log("fefezf");
      return res.send({
        method: req.method,
        status: "success",
        message: "Hello World",
        dbCategory,
      });
    } catch (error) {
      throw error;
    }
  }

  async getId(req, res) {
    try {
      const category = await Category.findById(req.params.id);
      return res.json({ message: "Voici votre Category ID", category });
    } catch {
      throw error;
    }
  }

  async create(req, res) {
    try {
      const { name, icon } = req.body;
      console.log("req.body", req.body);
      if (name && icon) {
        // On définit la construction de notre article
        const category = new Category({
          name,
          icon,
        });

        // Et on sauvegarde nos modifications
        category.save((err) => {
          if (err) return handleError(err);
        });

        return res.json({
          message: "Item cree avec success !",
          dbCategory: await Category.find({}, ["name", "icon", "articles_id"]),
        });
      } else return res.json({ message: "Error, l'item n'as pas été créé !" });
    } catch {
      throw error;
    }
  }

  async editOne(req, res) {
    const article = await Category.findById(req.params.id);
    let articlesTemp = [];
    // if (req.body.articles_id !== Array) req.body.articles_id = [req.body.articles_id]

    console.log("article", article, req.body, article.articles_id.length);
    articlesTemp.push(req.body.articles_id);
    // if (article.articles_id.length !== req.body.articles_id) {
    //   articlesTemp = []
    //   req.body.articles_id.forEach(art => articlesTemp.push(art))
    // } else {
    //   articlesTemp = article.articles_id
    // }

    console.log("articlesTemp", articlesTemp);

    try {
      console.log("put", req.params, req.body);
      Category.findByIdAndUpdate(
        req.params.id,
        { ...req.body, articles_id: articlesTemp },
        async (err, data) => {
          if (err) throw err;
          return res.json({
            message: "Item edit avec success !",
            dbCategory: await Category.find({}, [
              "name",
              "icon",
              "articles_id",
            ]),
          });
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(req, res) {
    try {
      console.log("delete", req.params.id);
      const CategoryId = await Category.findById(req.params.id);
      console.log("CategoryId DeleteOne", CategoryId);

      Category.findByIdAndDelete(req.params.id, async (err, data) => {
        if (err) throw err;
        return res.json({
          message: "la category à été supprimer avec success !",
          dbCategory: await Category.find(),
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteAll(req, res) {
    try {
      console.log("delete");
      const dbCategory = await Category.find();

      async function delCom(id) {
        // await Comment.deleteMany({ _id: e._id });
      }

      dbCategory.forEach((i) => {
        console.log("db", i);
      });

      await Category.deleteMany();

      return res.json({
        message: "Tout les items on été supprimer avec success !",
      });
    } catch {
      throw error;
    }
  }
}

module.exports = CategoryControllers;
