# 09-connect-back-oop-sql

(différence entre 07 - 08 - 09 l'architecture est favoriser pour la POO (Programmation Orienté Objet) et la base de données est en SQL)

# Quel utilité d'avoir un Back ?

Ici l'objectif est de créer une API afin de fournir des routes pour notres applications REACT. Les seules petites spécificité sont que lors de la config de notre back-end vous aurez besoin d'utiliser le module CORS, qui va nous permettre d'autoriser des clients à communiquer avec notre API.

Grâce à notre API nous allons pouvoir créer un CRUD (Create, Read, Update, Delete) complet en rechargeant directement les data dans notre front grâce à Redux.

# Architecture

server.js -> point d'entrée de notre application (config global)
routes/router.js -> config et initialisation de nos routes
routes/controllers/ -> tous les controlleurs qui nous permettrons de répondre à la requète
routes/middleware/ -> tous les middlewares qui nous permettrons de filtrer les requètes
models/ -> tous les models intérargissant avec la BDD

# Pre-requise
   - node v14.18.2
   - mongo DB
   - npm

# Pour le Front

```sh
cd tuto; npm i; npm start;
```

Si vous n'avez pas monter votre BDD suivez ces commandes sinon passer directement au démarage du Back.
au cas ou, vous devez bien évidemment avoir un user mysql avec sont password.

```sh
cd backoop-sql
sudo mysql
```

dans le terminal mysql sourcer le script

```sh
source script.sql
```

# Pour le Back

```
cd back; npm i; npm run dev;
```


Enjoy'
