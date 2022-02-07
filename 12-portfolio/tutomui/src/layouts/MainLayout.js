import * as React from "react";
import { ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../store/actions/CategoryActions";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";

import { themeUser } from "../config/theme";
import { Box } from "@mui/system";
import { styled, useTheme } from "@mui/material/styles";
import { style } from "../config/globalStyle";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Footer from "../components/core/Footer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItem from "@mui/material/ListItem";
import ItemCollapse from "../components/core/ItemCollapse";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.listCategory);

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const IconMenuChange = () => {
    if (open !== true) {
      return (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "flex" }) }}
        >
          <MenuIcon />
        </IconButton>
      );
    } else {
      return (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerClose}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "flex" }) }}
        >
          <ChevronLeftIcon />
        </IconButton>
      );
    }
  };

  React.useEffect(() => {
    console.log("effect getCategory");
    dispatch(getCategory());
  }, []);

  return (
    <ThemeProvider theme={themeUser}>
      <CssBaseline />
      <GlobalStyles styles={{ ...style }} />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Toolbar>
              { IconMenuChange() }
              <Typography variant="h6" noWrap component="div">
                Welcome to H-land
              </Typography>
            </Toolbar>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Home", "About", "Contact", "Project", "Category", "Admin"].map(
              (link, index) => (
                <ListItem
                  button
                  key={link}
                  onClick={() => navigate({ pathname: `/${link}` })}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={link} />
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {categories.length > 0 &&
              categories.map((category, index) => {
                return <ItemCollapse key={index} category={category} />;
              })}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          {children}
          {/* <Footer /> */}
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
