const Connection = require("../config/ConnectionDB");
const Message = require("../models/MessageModel");

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

class MessageControllers extends Connection {
  constructor () {
    super();
    privateProps.set(this.databaseConnection());
  }

  async getAll (req, res) {
    try {
      const dbMessage = await Message.find();
      return res.send({
        method: req.method,
        status: "success",
        message: "Hello World",
        dbMessage,
      });
    } catch (error) {
      throw error;
    }
  }

  async getId (req, res) {
    try {
      const Message = await Message.findById(req.params.id);
      return res.json({ message: "Voici votre Message ID", Message });
    } catch {
      throw error;
    }
  }

  async create (req, res) {
    try {
      const { name, email, subject, message } = req.body;
      // console.log("req.body", req.body);
      if (name && description) {
        // On définit la construction de notre article
        const message = new Message({
          name, email, subject, message
        });

        // Et on sauvegarde nos modifications
        message.save((err) => {
          if (err) return handleError(err);
        });

        return res.json({
          message: "Item cree avec success !",
          dbMessage: await Message.find()
        });
      } else return res.json({ message: "Error, l'item n'as pas été créé !" });
    } catch {
      throw error;
    }
  }

  async editOne (req, res) {
    try {
      // console.log("put", req.query, req.body);
      Message.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        async (err, data) => {
          if (err) throw err;
          return res.json({
            message: "Item edit avec success !",
            dbMessage: await Message.find(),
          });
        }
      );
    } catch {
      throw error;
    }
  }

  async deleteOne (req, res) {
    try {
      // console.log("delete", req.query, req.params.id);
      const MessageId = await Message.findById(req.params.id);

      if (MessageId.comment.length > 0) {
        for (let i = 0; i < MessageId.comment.length; i++) {
          // console.log(
          //   "Le commentaire de " +
          //     MessageId.comment[i].author +
          //     " à bien été supprimer !"
          // );
          await Comment.findByIdAndDelete(MessageId.comment[i]._id);
        }

        Message.findByIdAndDelete(req.params.id, async (err, data) => {
          if (err) throw err;
          return res.json({
            message:
              "les comments à été supprimer avec success et l'Message aussi !",
            dbMessage: await Message.find(),
          });
        });
      } else {
        Message.findByIdAndDelete(req.params.id, async (err, data) => {
          if (err) throw err;
          return res.json({
            message: "Item delete avec success !",
            dbMessage: await Message.find(),
          });
        });
      }
    } catch {
      throw error;
    }
  }

  async deleteAll (req, res) {
    try {
      // console.log("delete");
      const dbMessage = await Message.find();

      async function delCom(id) {
        // await Comment.deleteMany({ _id: e._id });
      }

      dbMessage.forEach((i) => {
        // console.log("db", i);
      });

      //   await Message.deleteMany();

      return res.json({
        message: "Tout les items on été supprimer avec success !",
      });
    } catch {
      throw error;
    }
  }
}

module.exports = MessageControllers;
