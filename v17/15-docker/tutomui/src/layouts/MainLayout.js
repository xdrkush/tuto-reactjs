import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from '@mui/material/GlobalStyles';

import { theme } from "../config/theme";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { style } from '../config/globalStyle'

import Navigation from "../components/core/Navigation";
import Footer from "../components/core/Footer";

const Main = styled("div")(({ theme }) => ({
  marginTop: 50,
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
}));

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{...style}}/>
      <Navigation />
      <Box component="main" sx={{ pt: 5 }}>
        <Main>{children}</Main>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayout;
