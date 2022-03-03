import { createTheme } from '@mui/material/styles';
import { orange, blue, purple } from '@mui/material/colors';

// Main Layout
let theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: orange[500]
    }
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
      main: orange[500]
    }
  },
});
// themeAdmin = responsiveFontSizes(theme);

export { theme, themeAdmin }