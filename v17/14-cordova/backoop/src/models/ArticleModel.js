/*
 *
 * Model de 'Article'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Import model
const Category = require('./CategoryModel')
const User = require('./UserModel')

// Création de notre Shéma (Model)
// c'est le Model de (Model)
const ArticleSchema = new Schema({
    // Première variable (basique)
    title: {
        type: String,
        default: "J'ai oublie le titre"
    },
    description: {
        type: String,
        default: "J'ai oublie la description"
    },
    subtitle: String,
    author_id:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category_id:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
})

// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = mongoose.model('Article', ArticleSchema)