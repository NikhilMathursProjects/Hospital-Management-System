import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar"; // Import Avatar component
// import logo from "../images/transparasi.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
// import { UserProfileContext } from "../context/UserContext";

const pages = ["Home", "About Us", "Contact Us"];
const settings = ["Profile", "Subscription", "Logout"];

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, isSmallScreen }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: isSmallScreen ? "100%" : `calc(100% - ${drawerWidth}px)`, // 100% - 240px
    zIndex: isSmallScreen && -999,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function ResponsiveAppBar({ open, handleDrawerOpen }) {
//   const { userProfile } = React.useContext(UserProfileContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfileClick = () => {
    handleCloseUserMenu();
    navigate("/users");
  };

  const [userType, setUserType] = useState("");

//   const handleSignOut = () => {
//     if (!userType) {
//       instance.logoutRedirect();
//     } else {
//       instance.logoutRedirect({
//         authority:
//           "",
//       });
//       sessionStorage.removeItem("usertype");
//     }
//     localStorage.clear();
//   };

//   useEffect(() => {
//     if (sessionStorage?.getItem("userType")) {
//       const userType = sessionStorage?.getItem("userType");
//       setUserType(userType);
//     }
//   }, []);

//   const handleMenu = (setting) => {
//     setting === "Profile" ? handleProfileClick() : handleCloseUserMenu();
//     setting === "Logout" && handleSignOut();
//     setting === "Subscription" && navigate("/subscription-details");
//   };

  return (
    <AppBar position="fixed" open={open} isSmallScreen={isSmallScreen}>
      <Container maxWidth="xl" style={{ paddingLeft: "5px" }}>
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerOpen}
            color="inherit"
            sx={{
              ...(open && { display: "none" }),
            }}
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
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>

          <Typography
            variant="h"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            <img
            //   src={logo}
              alt="Smart Decision Logo"
              style={{ height: "60px" }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Typography
              variant="h6"
              component="span"
              sx={{ color: "white", marginRight: "10px" }}
            >
              {/* {userProfile && userProfile?.displayName} */}Test Name
            </Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* Display Avatar with the first two letters of the name */}

                <Avatar sx={{ bgcolor: "white", color: "#40BAB4" }}>
                  {/* {userProfile &&
                    `${userProfile?.givenName?.[0].toUpperCase()}${userProfile?.surname?.[0].toUpperCase()}`} */}Firstname Lastname
                </Avatar>
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
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
