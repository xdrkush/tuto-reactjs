/*
 *
 * Model de 'Article'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Import model
const Comment = require('./CommentModel')

// Création de notre Shéma (Model)
// c'est le Model de (Model)
const ArticleSchema = new Schema({
    // Première variable (basique)
    title: {
        type: String,
        default: "J'ai oublie le titre"
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    price: Number
})

// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = mongoose.model('Article', ArticleSchema)