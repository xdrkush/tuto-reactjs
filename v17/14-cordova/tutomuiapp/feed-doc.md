## Information

Build react app with cordova 2022 .apk

## Pre-requise
  - Java 8
  - android studio (sdk manager 30.0.3)
  - node v14.18.2
  
# Doc
  - https://stackoverflow.com/questions/65060150/not-getting-service-worker-with-create-react-app
  - https://www.youtube.com/watch?v=SdSg0leeGaM

# Feed

## Create project
```
nvm i 14.18.2
npx create-react-app tutomui --template cra-template-pwa
cd ./tutomui
npm run eject
y
```

edit ./config/paths => ( ... appBuild: resolveApp('www'), ...)

edit ./package.json => ( ... "homepage": "./", ... )

## Build app cordova
```
cordova create tutomuiapp com.exemple.tutomuiapp TutoMuiApp
cp ./tutomuiapp/config.xml ./
```

edit ./src/index.js
```
...
const startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://cra.link/PWA
  serviceWorkerRegistration.register();
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false)
} else {
  startApp()
}
```

edit ./public/index.html
```
...
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
...
    <script type="text/javascript" src="cordova.js"></script>
  </body>
</html>
```

## Build react
```
npm run build
```

## Build cordova android
```
cordova platform add android
```
## Run test
Run app on android-studio with avd api-27
```
cordova emulate android
```

Build aab default new apk but its just for deploy to playstore
    attention au version dans sdk manager 30.0.3
    - https://i.stack.imgur.com/QkpjI.png
    - https://i.stack.imgur.com/Ewbs2.png


## Build .aab
```
cordova -release build android
```
!!! We need .apk no aab Warn !!!

## Build .apk
```
cordova -release build -- --packageType=apk
```

## And sign your apk
```
cd ./platforms/android/app/build/outputs/apk/release
keytool -genkey -v -keystore app.jks -alias app -keyalg RSA -keysize 2048 -validity 20000
jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore app.jks ./app-release-unsigned.apk app
zipalign -v 4 ./app-release-unsigned.apk app-release.apk
```
## Or 
```
cp ./signApk.sh ./platforms/android/app/build/outputs/apk/release
chmod +x ./signApk.sh
./signApk.sh app
```
(create a password for your key > create signature > signed .apk)

(warn now sign apk & aab with SHA-256)
  - https://stackoverflow.com/questions/50560045/sign-android-app-bundle-from-command-line
  - https://cordova.apache.org/announcements/2021/07/20/cordova-android-10.0.0.html?

Enjoy'