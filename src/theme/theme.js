import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#40BAB4",
      contrastText: "#FFFFFF",
      light: "#D5EDEC",
    },
    secondary: {
      main: "#4F40BA",
      contrastText: "#FFFFFF",
      light: "#D8D5ED",
      dark: "#3D3197",
    },
    info: {
      main: "#948BD3",
    },
    text: {
      primary: "#000000",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontFamily: "Oswald, sans-serif",
      fontSize: "2.125rem", // Standard for H1
      fontWeight: "bold",
      color: "black",
    },
    h2: {
      fontFamily: "Oswald, sans-serif",
      fontSize: "1.875rem", // Standard for H2
      fontWeight: "bold",
      color: "black",
    },
    h3: {
      fontFamily: "Oswald, sans-serif",
      fontSize: "1.5rem", // Standard for H3
      fontWeight: "bold",
      color: "black",
    },
    h4: {
      fontFamily: "Oswald, sans-serif",
      fontSize: "1.25rem", // Standard for H4
      fontWeight: "bold",
      color: "black",
    },
    h5: {
      fontFamily: "Oswald, sans-serif",
      fontSize: "1.125rem", // Standard for H5
      fontWeight: "bold",
      color: "black",
    },
    h6: {
      fontFamily: "Oswald, sans-serif",
      fontSize: "1rem", // Standard for H6
      fontWeight: "bold",
      color: "black",
    },
    body1: {
      fontSize: "1rem", // Standard for body1
      color: "#000000",
    },
    body2: {
      fontSize: "0.875rem", // Standard for body2
      color: "#000000",
    },
    subtitle1: {
      fontSize: "1rem", // Standard for subtitle1
      color: "#000000",
    },
    subtitle2: {
      fontSize: "0.875rem", // Standard for subtitle2
      color: "#000000",
    },
    button: {
      fontSize: "1rem", // Standard for button
      textTransform: "none",
    },
  },
});

// Apply responsive font sizes
theme = responsiveFontSizes(theme);

export default theme;
