const bcrypt = require("bcrypt");
const Connection = require("../config/ConnectionDB");
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

class UserControllers extends Connection {
  constructor() {
    super();
    privateProps.set(this.databaseConnection());
  }

  async getAll(req, res) {
    try {
      const dbUser = await User.find({}, [
        "name",
        "email",
        "isVerified",
        "isAdmin",
        "isBan",
      ]);
      return res.send({
        method: req.method,
        status: "success",
        message: "Hello World",
        dbUser,
      });
    } catch (error) {
      throw error;
    }
  }

  async login(req, res) {
    try {
      // console.log('login controller', req.body)
      const { name, password } = req.body;
      const userAuthEmail = await User.findOne({ email: name }),
        userAuthPseudo = await User.findOne({ name: name }),
        user = userAuthEmail || userAuthPseudo;
      if (!user)
        return res.json({ error: "l' email ou le pseudo n'existe pas." });
      else if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
          if (err) throw new Error(err);
          else if (same) {
            const token = jwt.sign(
              {
                id: user._id,
                name: user.name,
                email: user.email,
                pseudo: user.pseudo,
                isVerified: user.isVerified,
                isAdmin: user.isAdmin,
              },
              process.env.JWT_TOKEN,
              {
                expiresIn: "4h",
              }
            );
            return res.send({
              method: req.method,
              status: "success",
              flash: "Login Success !",
              token: token,
            });
          }
        });
      } else return res.json({ error: "Une erreur c'est produite." });
    } catch (error) {
      throw error;
    }
  }

  async register(req, res) {
    try {
      const { email, name, password } = req.body;
      const checkEmail = await User.findOne({ email });
      const checkPseudo = await User.findOne({ name });

      if (checkEmail)
        return res.json({
          status: false,
          message: "error: Email déja utiliser !",
        });
      if (checkPseudo)
        return res.json({
          status: false,
          message: "error: Pseudo déja utiliser !",
        });
      if (name && email && password) {
        const hash = await bcrypt.hash(password, 16);
        // console.log("register", name, email, hash);
        User.create({ ...req.body, password: hash }, (err, data) => {
          if (err) throw new Error(err);
          else
            return res.json({
              status: true,
              message: "Votre Compte à bien été créé.",
            });
        });
      } else return res.json({ message: "Error, l'user n'as pas été créé !" });
    } catch (error) {
      throw error;
    }
  }

  async checkAuth(req, res) {
    console.log("check token");
    const tokenVerif = jwt.verify(
      req.params.token,
      process.env.JWT_TOKEN,
      (err, decoded) => {
        if (err) return;
        return decoded;
      }
    );
    try {
      // console.log('checkAuth', tokenVerif)
      if (tokenVerif)
        return res.send({
          method: req.method,
          status: "success",
          message: "Login Auth Success !",
          token: req.params.token,
        });
    } catch (error) {
      throw error;
    }
  }
  
  async editOne(req, res) {
    try {
      console.log("put", req.params, req.query, req.body);
      User.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        async (err, data) => {
          if (err) throw err;
          return res.json({
            message: "Item edit avec success !",
            dbUser: await User.find({}, [
              "name",
              "email",
              "isVerified",
              "isAdmin",
              "isBan",
            ]),
          });
        }
      );
    } catch {
      throw error;
    }
  }

  async getId(req, res) {
    try {
      const user = await User.findById(req.params.id);
      return res.json({ message: "Voici votre User ID", user });
    } catch {
      throw error;
    }
  }

  async deleteOne(req, res) {
    try {
      // console.log("delete", req.query, req.params.id);
      const userId = await User.findById(req.params.id);

      User.findByIdAndDelete(req.params.id, async (err, data) => {
        if (err) throw err;
        return res.json({
          message:
            "les comments à été supprimer avec success et l'User aussi !",
          dbUsers: await User.find(),
        });
      });
    } catch {
      throw error;
    }
  }

  async deleteAll(req, res) {
    try {
      // console.log("delete");
      const dbUser = await User.find();

      async function delCom(id) {
        // await Comment.deleteMany({ _id: e._id });
      }

      // dbUser.forEach((i) => {
      //   // console.log("db", i);
      // });

      //   await User.deleteMany();

      return res.json({
        message: "Tout les items on été supprimer avec success !",
      });
    } catch {
      throw error;
    }
  }
}

module.exports = UserControllers;
