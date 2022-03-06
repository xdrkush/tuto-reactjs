/*
 *
 * Model de 'Category'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Création de notre Shéma (Model)
// c'est le Model de (Model)
const MessageSchema = new Schema({
    // Première variable (basique)
    name: {
        type: String,
        default: "J'ai oublie le titre"
    },
    email: {
        type: String,
        default: "icon"
    },
    subject: {
        type: String,
        default: "icon"
    },
    message: {
        type: String,
        default: "icon"
    }
})

// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = mongoose.model('Message', MessageSchema)