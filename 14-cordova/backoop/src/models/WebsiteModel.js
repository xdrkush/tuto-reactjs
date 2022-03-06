/*
 *
 * Model de 'Article'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Import model
const User = require('./UserModel')

// Création de notre Shéma (Model)
// c'est le Model de (Model)
const WebsiteSchema = new Schema({
    // Première variable (basique)
    name: {
        type: String,
        default: "J'ai oublie le titre"
    },
    description: {
        type: String,
        default: "J'ai oublie la description"
    },
    home: {
        title: {
            type: String,
            default: "J'ai oublie le titre"
        },
        description: {
            type: String,
            default: "J'ai oublie le titre"
        },
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = mongoose.model('Website', WebsiteSchema)