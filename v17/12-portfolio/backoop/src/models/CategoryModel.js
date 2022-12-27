/*
 *
 * Model de 'Category'
 ******************************/

// Import de Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = require("./ArticleModel");

// Création de notre Shéma (Model)
// c'est le Model de (Model)
const CategorySchema = new Schema({
  // Première variable (basique)
  name: {
    type: String,
    default: "J'ai oublie le titre",
  },
  icon: {
    type: String,
    default: "icon",
  },
  articles_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
});

// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = mongoose.model("Category", CategorySchema);
