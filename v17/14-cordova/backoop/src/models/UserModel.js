/*
 *
 * Model de 'Article'
 ******************************/

// Import de Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Création de notre Shéma (Model)
// c'est le Model de (Model)
const UserSchema = new Schema({
  // Première variable (basique)
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  isBan: { type: Boolean, default: false },
});

// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = mongoose.model("User", UserSchema);
