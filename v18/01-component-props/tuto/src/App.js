import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

function App() {
  return (
    <div className="App">

      <Navbar />

      <main>
        <Header />
        <List />
      </main>

      <Footer />

    </div>
  );
}

export default App;
