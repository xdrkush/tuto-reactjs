# 03-router

# C'est quoi un router

Un router nous permet de d'avoir une instance qui nous facilitera les echanges entre nous pas. En sois il agit comme un échangeur d'autoroute, c'est à dire ?
Nous devons tout d'abord créé notre router pour assigner des composants au montage de la page demander, c'est lui qui nous servira la page voulu suivant la route demandé.

Exemple:

```js
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Contact" exact element={<Contact/>} />
        <Route path="/Article" exact element={<Article/>} />
        <Route path="/Admin" exact element={<Admin/>} />
        <Route element={ NotFound } />
      </Routes>
    </HashRouter>
```
Donc ici nous constatons que chaque routes distribuera un components spécifique, ici ce sont des pages exactements, ensuite seront monté tous les composants enfant.

# Install

```
npm i react-router-dom
```

# Docs:
  - https://www.w3schools.com/react/react_router.asp
  - https://www.geeksforgeeks.org/reactjs-router/
  - https://www.tutorialspoint.com/reactjs/reactjs_router.htm
  - https://paulgrajewski.medium.com/using-context-and-hashrouter-in-react-87afcefc5966
  
