# Docs

- For Webpack:

  - officiel:
  - tuto:

- For Electron:

  - officiel: https://www.electronjs.org/
  - tuto: https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3

- For cordova:
  - officiel:
  - tuto: https://medium.com/@pshubham/using-react-with-cordova-f235de698cc3
  - sign apk: https://quasar.dev/quasar-cli/developing-cordova-apps/publishing-to-store
  - info: http://experiencesampler.com/createapp/

# Pré-requis

- Node V 15.0.1
- Android Studio
- React-create-app & Electron & Cordova
- (for cordvova) java 8

# Config

Electron:
package.json
```
{
  "main": "build/electron.js",
}
```

Cordova:
package.json
```
 {
   "main": "index.js",
 }
```

# Installation

Webapp:
```
yarn
```

Electron:
```
yarn e:build
```

Cordova (android):
```
yarn c:create
```
Ensuite vous devez modifiez votre package.json en y important (script, browserslist) et fusionnez les dépendances et devDependances
et pensez à configuré le main du package.json pour cordova
```
cd src-cordova
yarn c:check
```
(la commande c:check peux planter quand elle executer par yarn ou npm, je vous conseil de récupérer la commande et la glisser dans le terminal à la main)

# Run

Server (Simulate DB):
```
yarn server
```

Webapp (dev):
```
yarn start
```

Electron (dev):
```
yarn e:dev
```

Cordova (dev):
run the AVD (Android Studio)
```
cd src-cordova
yarn c:dev
```
# Build
Webapp:
```
yarn w:build
```

Electron:
```
yarn e:linux
```