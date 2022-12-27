import HeaderHome from "../components/home/HeaderHome";
import LearnWithMeHome from "../components/home/LearnWithMeHome";
import ProjectHome from "../components/home/ProjectHome";
import ServiceHome from "../components/home/ServiceHome";
import { Box } from "@mui/system";
import Footer from "../components/core/Footer";

const HomePage = () => {
  return (
    <Box>
      <HeaderHome />
      <ServiceHome />
      <LearnWithMeHome />
      <ProjectHome />
      <Footer />
    </Box>
  );
};

export default HomePage;
