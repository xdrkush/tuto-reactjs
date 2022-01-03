import MainLayout from "../layouts/MainLayout";
import ListCard from "../components/home/ListCard";

function HomePage() {
  const listCard = [
    {
      id: 0,
      title: "titre 1",
      subtitle: "sous-titre 1",
      img: "https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no",
    },
    {
      id: 1,
      title: "titre 2",
      subtitle: "sous-titre 2",
      img: "https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no",
    },
    {
      id: 2,
      title: "titre 3",
      subtitle: "sous-titre 3",
      img: "https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no",
    }
  ];
  return (
    <MainLayout>
      <ListCard list={ listCard } />
    </MainLayout>
  );
}

export default HomePage;
