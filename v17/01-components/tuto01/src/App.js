import "./assets/css/App.css"
import ListCard from "./components/ListCard";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navigation />
      <ListCard />
      <Footer />
    </div>
  );
}

export default App;
