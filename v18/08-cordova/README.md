# 08-cordova

# C'est quoi cordova ?

Cordova encapsule votre application HTML/JavaScript dans un conteneur natif qui peut accéder aux fonctions de l'appareil de plusieurs plates-formes. Ces fonctions sont exposées via une API JavaScript unifiée, vous permettant d'écrire facilement un ensemble de code pour cibler presque tous les téléphones ou tablettes sur le marché aujourd'hui et publier sur leurs magasins d'applications.

source: https://cordova.apache.org/

# Pre-requise
   - Android Studio
   - node v16.x.x
   - MySQL
   - npm ou yarn
   - Cordova (`sudo npm i -g cordova`)
   - Java 1.8 jre & Javac 1.8
   - Gradle 7.5.1

## Install JAVA & config for cordova

```sh
sudo apt install openjdk-8-jdk
sudo update-alternatives --config java

java -version; javac -version
```

Ajouter le code ci-dessous dans votre environement linux. `sudo vim ~/.bashrc`

```bash
# Java
export JAVA_HOME="/usr/lib/jvm/java-1.8.0-openjdk-amd64"
export PATH="$PATH:$JAVA_HOME/bin"
# Gradle
export PATH=$PATH:/opt/gradle/gradle-7.5.1/bin
# Android-Studio
export ANDROID_HOME="$HOME/Android/Sdk"
export ANDROID_SDK_ROOT="$HOME/Android/Sdk"
export PATH=$PATH:$ANDROID_SDK_ROOT/tools; PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

# Comment l'utiliser ?

Pour commencer nous devons re-creer notre architecture react avec un template PWA (Progressive Web App) puis la configurer et incorporer notre app déja existante.

# Let's gooo !

Création de notre architecture react:

```bash
nvm i 16
npx create-react-app tutomuiapp --template cra-template-pwa
cd ./tutomuiapp
npm run eject
y
```

`npm run eject` nous est utile afin de modifier certaine config par default de react et nous aurons besoin de configurer webpack afin de changer le fichier de output de notre build react afin qu'il soit consommer par cordova.

EDIT: `./config/paths` => `( ... appBuild: resolveApp('www'), ...)`

EDIT: `./package.json` => `( ... "homepage": "./", ... )`

Re-importer tous les modules npm de votre app react dans cette nouvelle architecture

Création de notre architecture cordova:

```bash
cd ./tutomuiapp
cordova create tutomuiapp com.exemple.tutomuiapp TutoMuiApp
# Copy du fichier config.xml de cordova dans notre racine de l'app REACT
cp ./tutomuiapp/config.xml ./
```

Récupérer les fichiers:
  - `service-worker.js` => `src/tests/service-worker.js`
  - `serviceWorkerRegistration.js` => `src/cordova/serviceWorkerRegistration.js`

Enfin vous pouvez supprimer l'architecture cordova, car elle maintenant prête à être fusionnez dans une seule et même app.

EDIT: intégrer le code ci-dessous dans => `./src/index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux'
import store from './store'

import App from './App';
import reportWebVitals from './tests/reportWebVitals';
import * as serviceWorkerRegistration from './cordova/serviceWorkerRegistration';

const startApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();

  serviceWorkerRegistration.register();

}

// Config cordova
if (window.cordova) {
  document.addEventListener('deviceready', startApp, false)
} else {
  startApp()
}
```

EDIT: `./public/index.html`

```html
<html>
  <head>

    ...
    <meta http-equiv="Content-Security-Policy" content="default-src * data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src * data: content:;" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    ...

  </head>
  <body>

   ...
    <!-- Ajout du script cordova -->
    <script type="text/javascript" src="cordova.js"></script> 

  </body>
</html>
```

Build de l'application React:

```bash
npm i -D cordova-android
npm run build
```

Ajout de platform Android dans notre architecture react-cordova

```bash
cordova platform add android
```

Enfin nous pouvons émuler notre application mobile sur l'AVD

```bash
cordova emulate android
```

Pour finir nous devons build notre .apk 

```bash
cordova -release build -- --packageType=apk
```

et la signer

(Installer zipalign au cas ce n'est pas fait `sudo apt install zipalign`)

```bash
cd ./platforms/android/app/build/outputs/apk/release
keytool -genkey -v -keystore app.jks -alias app -keyalg RSA -keysize 2048 -validity 20000
jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore app.jks ./app-release-unsigned.apk app
zipalign -v 4 ./app-release-unsigned.apk app-release.apk
```

# Docs
  - install android-studio: https://developer.android.com/studio/install
  - install android-studio: https://trendoceans.com/how-to-install-configure-android-studio-on-linux-ubuntu-20-04/
  - config cordova: https://stackoverflow.com/questions/43336924/cordova-with-create-react-app
  - config env java pour cordova: https://quasar.dev/quasar-cli-webpack/developing-cordova-apps/preparation
  - conf java_home: https://linuxhint.com/set-java-home-linux/
  - install gradle: https://gradle.org/install/
  - regle CSP: https://developer.mozilla.org/fr/docs/Web/HTTP/CSP

Enjoy'