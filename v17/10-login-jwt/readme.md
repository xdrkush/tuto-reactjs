# 10-login-jwt

# Quel utilité pour les JWT (json web token) ?

L'utilité pour un JWT est de transmettre des données de manière chiffré et surtout signé, c'est à dire ? En sois nous avons besoin d'envoyer des données de notre Back vers notre Front, une manière sécuriser de le faire est d'utiliser un JWT, il nous servira de capsule afin d'y insérer des données, et de pouvoir les manipuler une fois reçu.

Un JWT n'est pas une solution à tous nos problèmes car il peut facilement être décoder, mais la signature elle ce veut infalsifiable car stocker coté serveur elle ce veut privée.

# Comment l'utiliser ?

Encapsuler des données

```js
var token = jwt.sign({
  data: 'foobar',
  name: 'bruno',
}, 'monSuperMotPasse', { expiresIn: 60 * 60 });
```

Décoder des données
```js
var decoded = jwt.decode(token);
```

Vérifier signature du token (authentifié)
```js
var decoded = jwt.verify(token, 'monSuperMotPasse');
```

# Pre-requise
   - node v14.18.2
   - mongo DB
   - npm

# Install

Back-end

```shell
npm i jsonwebtoken
```

Front-end

```shell
npm i jwt-decode
```

# Docs
  - https://jwt-decoder.com/
  - https://www.npmjs.com/package/jwt-decode
  - https://www.npmjs.com/package/jsonwebtoken
