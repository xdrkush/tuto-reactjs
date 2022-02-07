const Connection = require("../config/ConnectionDB");
const User = require("../models/UserModel");

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

class UserControllers extends Connection {
  constructor() {
    super();
    privateProps.set(this.databaseConnection());
  }

  async getAll(req, res) {
    try {
      const dbUser = await User.find();
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
      return res.json({ login: "Login !!!" });
    } catch {
      throw error;
    }
  }

  async register(req, res) {
    try {
      const b = req.body;
      console.log("req.body", req.body);
      if (b.name && b.password) {
        // On définit la construction de notre User
        const user = new User({
          name: b.name,
          password: b.password,
        });

        // Et on sauvegarde nos modifications
        user.save((err) => {
          if (err) return handleError(err);
        });

        return res.json({
          message: "Users cree avec success !",
        });
      } else return res.json({ message: "Error, l'item n'as pas été créé !" });
    } catch {
      throw error;
    }
  }

  async editOne(req, res) {
    try {
      console.log("put", req.query, req.body);
      User.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        async (err, data) => {
          if (err) throw err;
          return res.json({
            message: "User edit avec success !",
          });
        }
      );
    } catch {
      throw error;
    }
  }

  async checkAuth(req, res) {
    console.log("check token", req.params.token);
    const user = jwt.verify(
      req.params.token,
      process.env.SIGN_JWT,
      (err, decoded) => {
        if (err) return;
        return decoded;
      }
    );
    try {
      // JWT
      return res.send({
        method: req.method,
        status: "success",
        message: "Login Auth Success !",
        user: {
          name: user.name,
          email: user.email,
          authenticate: user.authenticate,
          isVerified: user.isVerified,
          isAdmin: user.isAdmin,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async editOne(req, res) {
    try {
      console.log("put", req.query, req.body);
      User.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        async (err, data) => {
          if (err) throw err;
          return res.json({
            message: "Item edit avec success !",
            dbUsers: await User.find(),
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
      console.log("delete", req.query, req.params.id);
      const userId = await User.findById(req.params.id);
      console.log("UserId DeleteOne", userId);

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
      console.log("delete");
      const dbUser = await User.find();

      async function delCom(id) {
        // await Comment.deleteMany({ _id: e._id });
      }

      dbUser.forEach((i) => {
        console.log("db", i);
      });

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
