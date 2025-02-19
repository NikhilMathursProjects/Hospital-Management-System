import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
} from "@mui/material";

function Login({
  handleSignUpRedirect,
  handleSignInRedirect,
  handleSignInRedirectForEmployee,
}) {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Box flex="1" display="flex">
        <Grid container flexGrow={1}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: {xs:'white',md:theme.palette.grey[300]},
              // backgroundColor:theme.palette.grey[300],
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: theme.spacing(6),
              gap: theme.spacing(2),
            }}
          >
            <Box sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, gap: theme.spacing(2) }}>
              <Button
                variant="contained"
                onClick={handleSignInRedirect}
                sx={{ width: "200px" }}
              >
                Log in
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        component="footer"
        sx={{
          backgroundColor: theme.palette.grey[800],
          color: theme.palette.common.white,
          padding: theme.spacing(2),
          textAlign: "center",
        }}
      >
        <Typography sx={{color:'white'}} variant="body2">Terms of use | Privacy policy</Typography>
      </Box>
    </Box>
  );
}

export default Login;
