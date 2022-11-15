# 01-Install

## React c'est quoi ?

React est une librairy JS qui va nous permettre de développer un site de manière modulaire, par composant. En sois React fonctionne par composant que l'on va imbriquer les uns avec les autres. L'on va pouvoir créer une architecture de type parent > enfant.

Plus d'info ici: https://ibracilinks.com/blog/quest-ce-que-reactjs-et-pourquoi-devrions-nous-utiliser-reactjs

## Pré-requis
  - Node JS v14.x.x
  - npx
  - create-react-app

How install npx ?
  - https://www.npmjs.com/package/npx

How install create-react-app ?
  - ``` npm uninstall -g create-react-app ```

# Create App React JS

```
npx create-react-app my-app
cd my-app
npm start
```

# Architecture

/src/App.css - CSS du composant
/src/App.js - Composant mère
/src/App.test.js - Test unitaire
/src/index.css - CSS Global
/src/index.js - Convert JSX to html il div#root
/src/logo.svg - Le logo par default de REACT
/src/reportWebVitals.js - Analyse de performance
/src/setupTests.js - config des tests avec jest

# Doc:
  - https://reactjs.org/docs/create-a-new-react-app.html

You can use the CDN but we don't use this in the tuto, we are focus on react-app

Good Luck'
