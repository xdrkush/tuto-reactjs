require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const port = process.env.PORT || 3033;
// const methodOverride = require("method-override");
const mongoose = require("mongoose");

app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://drkush.ml/')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.header('origin'))
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Cors
app.use(cors({
  origin: ['http://localhost:3000', 'http://192.168.1.13:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/assets", express.static("public"));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecter a MongoDB"))
  .catch((err) => console.log(err));

//   Import de notre router
const ROUTER = require("./routes/router");
app.use("/api", ROUTER);

app.listen(port, () => {
  console.log("le serveur tourne sur le port: " + port);
});
