import { createTheme } from "@mui/material/styles";
import { orange, blue, purple } from "@mui/material/colors";
import FontPoppins from '../assets/fonts/Poppins/Poppins-Bold.ttf'

// Main Layout
let themeUser = createTheme({
  type: "dark",
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      color: "",
      fontSize: 80,
      fontWeight: 5000,
    },
    h2: {
      fontSize: 70,
      fontWeight: 5000,
    },
    h3: {
      fontSize: 50,
      fontWeight: 5000,
    },
    h4: {
      fontSize: 30,
    },
    h5: {
      fontSize: 25,
    },
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "italic",
    },
  },
  palette: {
    background: {
      default: "#211525",
      paper: "#2F1F34",
    },
    primary: {
      main: "#2F1F34",
      dark: "#FFFFFF",
      light: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2F1F34",
      dark: "#FFFFFF",
      light: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
      disabled: "rgba(255,236,236,0.38)",
      hint: "#1CD6C1",
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#2F1F34",
        color: "#1CD6C1",
      },
    },
  },
});

// theme = responsiveFontSizes(theme);

// AdminLayout
let themeAdmin = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});
// themeAdmin = responsiveFontSizes(theme);

export { themeUser, themeAdmin };
