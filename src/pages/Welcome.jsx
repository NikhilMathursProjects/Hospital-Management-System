import React from "react";
import { Container, Box, Typography, Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import RateReviewIcon from "@mui/icons-material/RateReview";
import BuildIcon from "@mui/icons-material/Build";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material";

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
  width:'100%',
  // display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",  
  color: theme.palette.text.primary,
  // transition: "all 0.3s ease-in-out",
  transition: 'color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16) ",
  boxShadow: "0px 0px 6px #40BAB4",
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

function WelcomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ textAlign: "center", marginTop: "2rem",height:'100vh'}}>
        <Typography variant="h2" gutterBottom>
          Login
        </Typography>
        {/* <Typography variant="h4" gutterBottom sx={{ color: "#666666" }}>
          What do you want to do today?
        </Typography> */}
        <Grid container spacing={5} mt={6} >
          <Grid item xs={12} sm={6} md={4}>
            <StyledButton>
              <Typography variant="h5" gutterBottom>
                Receptionist
              </Typography>
              <ExploreIcon className="icon" />
            </StyledButton>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledButton>
              <Typography variant="h5" gutterBottom>
                Doctor
              </Typography>
              <LibraryBooksIcon className="icon" />
            </StyledButton>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledButton>
              <Typography variant="h5" gutterBottom>
                Nurse
              </Typography>
              <BuildIcon className="icon" />
            </StyledButton>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <StyledButton>
              <Typography variant="h5" gutterBottom>
                 Lab Assitant
              </Typography>
              <SubscriptionsIcon className="icon" />
            </StyledButton>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <StyledButton>
              <Typography variant="h5" gutterBottom>
                Admin
              </Typography>
              <SubscriptionsIcon className="icon" />
            </StyledButton>
          </Grid>
        </Grid>
        {/* <Box mt={4}>
          <FormControlLabel
            control={<Checkbox name="rememberPreference" />}
            label="Remember my preference. Don’t show me this page again!"
          />
        </Box> */}
      </Container>
    </ThemeProvider>
  );
}
export default WelcomePage;
