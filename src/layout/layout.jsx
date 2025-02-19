import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ResponsiveAppBar from "../pages/TopMostBar";
import { Collapse } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
// import "../pages/TopNavBar.css";
import "../pages/TopNavBar.css"
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import BadgeIcon from "@mui/icons-material/Badge";
import TimelineIcon from "@mui/icons-material/Timeline";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InterestsIcon from "@mui/icons-material/Interests";
import AppsIcon from "@mui/icons-material/Apps";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import PublishIcon from "@mui/icons-material/Publish";
import SyncIcon from "@mui/icons-material/Sync";
import SummarizeIcon from "@mui/icons-material/Summarize";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import DescriptionIcon from "@mui/icons-material/Description";
// import BreadcrumbsComponent from "../components/Breadcrumbs";

const drawerWidth = 240;

const CustomListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "35px",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    width: `calc(100% - ${open ? drawerWidth : 0}px)`, // Dynamically adjust the width
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  })
);

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null); // Initialize selectedItem state
  const [openMenu, setOpenMenu] = React.useState({ main: "", sub: "" });

  // Determine the currently selected item based on the path
  React.useEffect(() => {
    setOpenMenu((openMenu) => {
      switch (location.pathname) {
        case "/users":
          setSelectedItem(2);
          return { ...openMenu };
        case "/select-end-user-org":
          setSelectedItem(1);
          return { ...openMenu };
        case "/welcome":
          setSelectedItem(0);
          return{...openMenu};
        case "/select-buyer-guide/available-buyer-guides":
          setSelectedItem(4);
          return { ...openMenu, main: "menu1" };
        case "/select-buyer-guide/buyer-guide-of-interest":
          setSelectedItem(5);
          return { ...openMenu, main: "menu1" };
        case "/select-scenario":
          setSelectedItem(6);
          return { ...openMenu };
        case "/edit-scenario/vendor-options":
          setSelectedItem(8);
          return { ...openMenu, main: "menu2" };
        case "/edit-scenario/update-use-cases":
          setSelectedItem(9);
          return { ...openMenu, main: "menu2" };
        case "/edit-scenario/scenario-settings/bundle-option":
          setSelectedItem(11);
          return { ...openMenu, main: "menu2", sub: "menu3" };
        case "/edit-scenario/scenario-settings/threshold-option":
          setSelectedItem(12);
          return { ...openMenu, main: "menu2", sub: "menu3" };
        case "/edit-scenario/scenario-settings/display-option":
          setSelectedItem(13);
          return { ...openMenu, main: "menu2", sub: "menu3" };
        case "/edit-scenario/scenario-settings/report-settings":
          setSelectedItem(14);
          return { ...openMenu, main: "menu2", sub: "menu3" };
        case "/results/comparative-analysis":
          setSelectedItem(16);
          return { ...openMenu, main: "menu4" };
        case "/results/vendor-details":
          setSelectedItem(17);
          return { ...openMenu, main: "menu4" };
        case "/results/offer-details":
          setSelectedItem(18);
          return { ...openMenu, main: "menu4" };
        case "/generate-report":
          setSelectedItem(19);
          return { ...openMenu, main: "menu5" };
        case "/report-settings":
          setSelectedItem(22);
          return { ...openMenu, main: "menu5" };
        case "/view-reports":
          setSelectedItem(20);
          return { ...openMenu, main: "menu5" };
        case "/saved-reports":
          setSelectedItem(21);
          return { ...openMenu };
        default:
          setSelectedItem(null);
          return { ...openMenu };
      }
    });
  }, [location.pathname]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleUserType = () => {
      return (
        <CustomListItemIcon>
          <AddBusinessIcon />
        </CustomListItemIcon>
      );
  };

  const toggleMenu = (menu, level) => {
    if (level === "main") {
      setOpenMenu((prevState) => ({
        ...prevState,
        main: prevState.main === menu ? "" : menu,
      }));
    } else if (level === "sub") {
      setOpenMenu((prevState) => ({
        ...prevState,
        sub: prevState.sub === menu ? "" : menu,
      }));
    }
  };

  const getListItemButtonSx = (isSelected) => ({
    "&.Mui-selected": {
      backgroundColor: theme.palette.action.selected,
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  });

  return (
    <>
    
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <ResponsiveAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
        <MuiDrawer
          variant="persistent"
          anchor="left"
          open={open}
          sx={{
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "white",
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555",
              },
            },
          }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List
            sx={{ width: "100%", maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={() => navigate("/hii")}
              selected={selectedItem === 2}
              sx={getListItemButtonSx(selectedItem === 2)}
            >
              <CustomListItemIcon>
                <PersonIcon />
              </CustomListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/welcome")}
              selected={selectedItem === 0}
              sx={getListItemButtonSx(selectedItem === 0)}
            >
              <CustomListItemIcon>
                <PersonIcon />
              </CustomListItemIcon>
              <ListItemText primary="Staff" />
            </ListItemButton>

            {/* THIS IS HOW WE NEED TO PUT CONDITIONAL RENDERING */}
            {/* {userProfile && userProfile?.profileType !== "endUser" && (
              <ListItemButton
                onClick={() => navigate("/select-end-user-org")}
                selected={selectedItem === 1}
                sx={getListItemButtonSx(selectedItem === 1)}
              >
                {handleUserType()}
                <ListItemText primary="Select End-User Organisation" />
              </ListItemButton>
            )} */}

            <ListItemButton
              onClick={() => toggleMenu("menu1", "main")}
              selected={selectedItem === 3}
              sx={getListItemButtonSx(selectedItem === 3)}
            >
              <CustomListItemIcon>
                <TimelineIcon />
              </CustomListItemIcon>
              <ListItemText primary="Lab" />
              {openMenu.main === "menu1" ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={openMenu.main === "menu1"}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ...getListItemButtonSx(selectedItem === 4) }}
                  onClick={() =>
                    navigate("/select-buyer-guide/available-buyer-guides")
                  }
                  selected={selectedItem === 4}
                >
                  <CustomListItemIcon>
                    <EventAvailableIcon />
                  </CustomListItemIcon>
                  <ListItemText primary="Ward" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, ...getListItemButtonSx(selectedItem === 5) }}
                  onClick={() =>
                    navigate("/select-buyer-guide/buyer-guide-of-interest")
                  }
                  selected={selectedItem === 5}
                >
                  <CustomListItemIcon>
                    <InterestsIcon />
                  </CustomListItemIcon>
                  <ListItemText primary="Treatment" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => navigate("/select-scenario")}
              selected={selectedItem === 6}
              sx={getListItemButtonSx(selectedItem === 6)}
            >
              <CustomListItemIcon>
                <AppsIcon />
              </CustomListItemIcon>
              <ListItemText primary="Pharmacy" />
            </ListItemButton>

            <ListItemButton
              onClick={() => toggleMenu("menu2", "main")}
              selected={selectedItem === 7}
              sx={getListItemButtonSx(selectedItem === 7)}
            >
              <CustomListItemIcon>
                <AppRegistrationIcon />
              </CustomListItemIcon>
              <ListItemText primary="Patient" />
              {openMenu.main === "menu2" ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={openMenu.main === "menu2"}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ...getListItemButtonSx(selectedItem === 8) }}
                  onClick={() => navigate("/edit-scenario/vendor-options")}
                  selected={selectedItem === 8}
                >
                  <CustomListItemIcon>
                    <SyncIcon />
                  </CustomListItemIcon>
                  <ListItemText primary="Appointment" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, ...getListItemButtonSx(selectedItem === 9) }}
                  onClick={() => navigate("/edit-scenario/update-use-cases")}
                  selected={selectedItem === 9}
                >
                  <CustomListItemIcon>
                    <PublishIcon />
                  </CustomListItemIcon>
                  <ListItemText primary="Update Use Case Importance" />
                </ListItemButton>

                <ListItemButton
                  onClick={() => toggleMenu("menu3", "sub")}
                  selected={selectedItem === 10}
                  sx={{ ...getListItemButtonSx(selectedItem === 10), pl: 4 }}
                >
                  <CustomListItemIcon>
                    <AppRegistrationIcon />
                  </CustomListItemIcon>
                  <ListItemText primary="Scenario Settings" />
                  {openMenu.sub === "menu3" ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={openMenu.sub === "menu3"}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemButton
                      sx={{
                        pl: 8,
                        ...getListItemButtonSx(selectedItem === 11),
                      }}
                      onClick={() =>
                        navigate(
                          "/edit-scenario/scenario-settings/bundle-option"
                        )
                      }
                      selected={selectedItem === 11}
                    >
                      <CustomListItemIcon>
                        <SyncIcon />
                      </CustomListItemIcon>
                      <ListItemText primary="Bundle Options" />
                    </ListItemButton>
                    <ListItemButton
                      sx={{
                        pl: 8,
                        ...getListItemButtonSx(selectedItem === 12),
                      }}
                      onClick={() =>
                        navigate(
                          "/edit-scenario/scenario-settings/threshold-option"
                        )
                      }
                      selected={selectedItem === 12}
                    >
                      <CustomListItemIcon>
                        <DataThresholdingIcon />
                      </CustomListItemIcon>
                      <ListItemText primary="Threshold Options" />
                    </ListItemButton>
                    <ListItemButton
                      sx={{
                        pl: 8,
                        ...getListItemButtonSx(selectedItem === 13),
                      }}
                      onClick={() =>
                        navigate(
                          "/edit-scenario/scenario-settings/display-option"
                        )
                      }
                      selected={selectedItem === 13}
                    >
                      <CustomListItemIcon>
                        <DisplaySettingsIcon />
                      </CustomListItemIcon>
                      <ListItemText primary="Display Options" />
                    </ListItemButton>
                    <ListItemButton
                      sx={{
                        pl: 8,
                        ...getListItemButtonSx(selectedItem === 14),
                      }}
                      onClick={() =>
                        navigate(
                          "/edit-scenario/scenario-settings/report-settings"
                        )
                      }
                      selected={selectedItem === 14}
                    >
                      <CustomListItemIcon>
                        <DescriptionIcon />
                      </CustomListItemIcon>
                      <ListItemText primary="Report Settings" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => toggleMenu("menu4", "main")}
              selected={selectedItem === 15}
              sx={getListItemButtonSx(selectedItem === 15)}
            >
              <CustomListItemIcon>
                <TimelineIcon />
              </CustomListItemIcon>
              <ListItemText primary="Appointment" />
              {openMenu.main === "menu4" ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={openMenu.main === "menu4"}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ...getListItemButtonSx(selectedItem === 16) }}
                  onClick={() => navigate("/results/comparative-analysis")}
                  selected={selectedItem === 16}
                >
                  <CustomListItemIcon>
                    <AssessmentOutlinedIcon />
                  </CustomListItemIcon>
                  <ListItemText primary="Comparative Analysis" />
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 4, ...getListItemButtonSx(selectedItem === 17) }}
                  onClick={() => navigate("/results/vendor-details")}
                  selected={selectedItem === 17}
                >
                  <CustomListItemIcon>
                    <AnalyticsOutlinedIcon />
                  </CustomListItemIcon>
                  <ListItemText primary="Vendor Details" />
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 4, ...getListItemButtonSx(selectedItem === 18) }}
                  onClick={() => navigate("/results/offer-details")}
                  selected={selectedItem === 18}
                >
                  <CustomListItemIcon>
                    <AnalyticsOutlinedIcon />
                  </CustomListItemIcon>
                  <ListItemText primary="Offer Details" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* <ListItemButton
              onClick={() => toggleMenu("menu5", "main")}
              selected={selectedItem === 19}
              sx={getListItemButtonSx(selectedItem === 19)}
            >
              <CustomListItemIcon>
                <SummarizeIcon />
              </CustomListItemIcon>
              <ListItemText primary="Generate Report" />
              {openMenu.main === "menu5" ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={openMenu.main === "menu5"}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ...getListItemButtonSx(selectedItem === 22) }}
                  onClick={() => navigate("/report-settings")}
                  selected={selectedItem === 22}
                >
                  <CustomListItemIcon>
                    <InterestsIcon />
                  </CustomListItemIcon>
                  <ListItemText primary="Report Settings" />
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 4, ...getListItemButtonSx(selectedItem === 20) }}
                  onClick={() => navigate("/view-reports")}
                  selected={selectedItem === 20}
                >
                  <CustomListItemIcon>
                    <EventAvailableIcon />
                  </CustomListItemIcon>
                  <ListItemText primary="Preview Reports" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              onClick={() => navigate("/saved-reports")}
              selected={selectedItem === 21}
              sx={getListItemButtonSx(selectedItem === 21)}
            >
              <CustomListItemIcon>
                <InterestsIcon />
              </CustomListItemIcon>
              <ListItemText primary="Saved Reports" />
            </ListItemButton>

            <ListItemButton
              onClick={() => navigate("/purchase-single")}
              selected={selectedItem === 21}
              sx={getListItemButtonSx(selectedItem === 22)}
            >
              <CustomListItemIcon>
                <InterestsIcon />
              </CustomListItemIcon>
              <ListItemText primary="SINGLE PURCHASE" />
            </ListItemButton>

            <ListItemButton
              onClick={() => navigate("/purchase-bulk-multiple")}
              selected={selectedItem === 21}
              sx={getListItemButtonSx(selectedItem === 23)}
            >
              <CustomListItemIcon>
                <InterestsIcon />
              </CustomListItemIcon>
              <ListItemText primary="BULK PURCHASE MULTI" />
            </ListItemButton>

            <ListItemButton
              onClick={() => navigate("/purchase-bulk-single")}
              selected={selectedItem === 21}
              sx={getListItemButtonSx(selectedItem === 23)}
            >
              <CustomListItemIcon>
                <InterestsIcon />
              </CustomListItemIcon>
              <ListItemText primary="BULK PURCHASE SINGLE" />
            </ListItemButton> */}
          </List>
        </MuiDrawer>
        <Main open={open}>
          <DrawerHeader />
          {/* <BreadcrumbsComponent /> */}
          {children}
        </Main>
      </Box>
    </>
  );
}
