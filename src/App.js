import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Container, Box, Typography, Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material";
import WelcomePage from "./pages/Welcome";
import Login from "./pages/LogIn";
import Layout from "./layout/layout";
import ChartComponent from "./components/Graph/ChartComponent";
import TestPage from "./pages/testpage";

const theme = createTheme({
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
      fontSize: "2.125rem",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "Oswald, sans-serif",
      fontSize: "1.875rem",
      fontWeight: "bold",
    },
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  padding: "2.5rem",
  height: "100%",
  width: '100%',
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  color: theme.palette.text.primary,
  transition: 'color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  "&:before": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "0%",
    backgroundColor: theme.palette.primary.main,
    zIndex: 0,
    transition: "height 0.3s ease-in-out",
  },
  "&:hover:before": {
    height: "100%",
  },
  "&:hover": {
    color: theme.palette.primary.contrastText,
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.24)",
  },
  "& .MuiTypography-root": {
    position: "relative",
    zIndex: 1,
  },
  "& .icon": {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
}));

const Pages = () => {
  const location = useLocation(); // Hook to get the current route

  // Define routes where the Layout should not be shown
  const noLayoutRoutes = ["/","/login"]; // Add routes here where you don't want the Layout

  // Check if the current route is in the noLayoutRoutes array
  const shouldShowLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowLayout ? (
        <Layout>
          <Routes>
            {/* Added Route for Chart Page */}
            <Route path="/chart" element={<ChartComponent />} /> 
            <Route path="/hii" element={<TestPage/>}/>
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          {/* Added Route for Chart Page */}
          <Route path="/chart" element={<ChartComponent />} /> 
        </Routes>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </Router>
  );
}

export default App;