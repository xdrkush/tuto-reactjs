import "./assets/css/App.css"
import ListCard from "./components/ListCard";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"

function App() {
  const title = "Ma super app"
  const navlink = ['Article', 'Contact']
  const listCard = [
    {title: "titre 1", subtitle: "titre 1", img: "https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no"},
    {title: "titre 2", subtitle: "titre 2", img: "https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no"},
    {title: "titre 3", subtitle: "titre 3", img: "https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no"}    
  ]
  
  return (
    <div className="App">
      <Navigation title={ title } link={ navlink } />
      <ListCard list={ listCard } />
      <Footer title={ title } />
    </div>
  );
}

export default App;
