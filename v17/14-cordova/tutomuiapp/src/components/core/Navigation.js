import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { url: "/", name: "Home" },
  { url: "/Category", name: "Category" },
  { url: "/About", name: "About" },
];

const settings = ["Profile", "Admin", "Logout"];

function LoginButton(props) {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = useSelector((state) => state.login.user);
  const userToken = localStorage.getItem("user_token");
  const userAdmin = localStorage.getItem("user_admin");

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const logout = () => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("user_verified");
    localStorage.removeItem("user_admin");
    window.location.reload();
    navigate("/Login");
  };

  const toProfileUser = (user) => {
    navigate("/Profile/" + user.name, { state: user });
  };

  const checkStatusUser = (set) => {
    switch (set) {
      case "Admin":
        if (!userAdmin) {
          return;
        } else
          return (
            <NavLink exact="true" to={"/" + set} activeclassname="active">
              {set}
            </NavLink>
          );
      case "Profile":
        if (userToken === "visitor") {
          return;
        } else
          return (
            <Typography
              variant="body"
              noWrap
              component="div"
              onClick={() => toProfileUser(user)}
              sx={{}}
            >
              {user.name}
            </Typography>
          );
      case "Logout":
        return (
          <Button variant="outlined" size="medium" onClick={logout}>
            {set}
          </Button>
        );

      default:
        return (
          <NavLink exact="true" to={"/" + set} activeclassname="active">
            {set}
          </NavLink>
        );
    }
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Status Profile">
        <IconButton onClick={handleOpenUserMenu} sx={{}}>
          <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((link) => {
          return (
            <MenuItem key={link}>
              {checkStatusUser(link)}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}

function LogoutButton(props) {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Login / Register">
        <NavLink exact="true" to="/Login" style={{ textDecoration: "none" }}>
          <AccountCircleIcon
            color="secondary"
            sx={{ mt: 1, fontSize: "50px" }}
          />
        </NavLink>
      </Tooltip>
    </Box>
  );
}

export default function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate()
  const userToken = localStorage.getItem("user_token");
  const userAdmin = localStorage.getItem("user_admin");
  const user = useSelector((state) => state.login.user);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const CheckLoggedIn = (props) => {
    if (user && (userToken || userAdmin)) {
      return <LoginButton />;
    }
    return <LogoutButton />;
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          {/* <Link exact="true" to="/" style={{ textDecoration: "none" }}> */}
            <Typography
              onClick={() => navigate({pathname: '/'})}
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              LOGO
            </Typography>
          {/* </Link> */}
          {/* Menu Responcive */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <NavLink
                    key={page.name}
                    exact="true"
                    to={page.url}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Logo
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                key={page.name}
                exact="true"
                to={page.url}
                activeclassname="active"
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </NavLink>
            ))}
          </Box>

          {/* Components Conditional */}
          <CheckLoggedIn />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
