import { useState } from "react";

import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Outlet } from "react-router-dom";

import SidebarDrawer from "./SidebarDrawer";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth = 200;

const DashboardLayout = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box width="100%" height="100vh" display="flex">
      <AppBar position="fixed" open={open} variant="outlined">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <SidebarDrawer open={open} setOpen={setOpen} theme={theme} />
      <Box
        component="main"
        width="100%"
        sx={{ height: "100vh" - 8.5 }}
        flexGrow={1}
        mt={8.5}
        px={1}
      >
        {children}
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
