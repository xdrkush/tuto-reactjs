/*
 *
 * Model de 'Comment'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = require('./ArticleModel')

// Création de notre Shéma (Model)
// c'est le Model de (Model)
const CommentSchema = new Schema({
    // Première variable (basique)
    author: {
        type: String,
        default: "J'ai oublie le titre"
    },
    content: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    like: [{
        type: String
    }],
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }
})

// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = mongoose.model('Comment', CommentSchema)