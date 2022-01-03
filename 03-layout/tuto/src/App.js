import "./assets/css/App.css";
import MainLayout from "./layouts/MainLayout";
import ListCard from "./components/ListCard";

function App() {
  const listCard = [
    {
      title: "titre 1",
      subtitle: "titre 1",
      img: "https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no",
    },
    {
      title: "titre 2",
      subtitle: "titre 2",
      img: "https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no",
    },
    {
      title: "titre 3",
      subtitle: "titre 3",
      img: "https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no",
    }
  ];
  return (
    <MainLayout>
      <ListCard list={listCard} />
    </MainLayout>
  );
}

export default App;
