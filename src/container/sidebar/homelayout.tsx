import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { Avatar, Collapse, SvgIconTypeMap } from "@mui/material";

import logo from "../../assets/LOGO-NEGRO-SIN-FONDO.png";
import { Link } from "react-router-dom";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import ExitToApp from "@mui/icons-material/ExitToApp";

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const MobileDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface ListOption {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<NonNullable<unknown>, "svg">> & {
    muiName: string;
  };
  path: string;
  subs?: ListOption[];
}

interface HomeLayoutProps {
  listOptions: ListOption[];
  children: React.ReactElement;
}

const ItemList: React.FC<{ option: ListOption; mobile: boolean }> = ({
  option,
  mobile,
}) => {
  const [open, setOpen] = React.useState(false);
  const { Icon, path, title, subs } = option;

  return (
    <>
      <ListItem key={title} disablePadding>
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
          {...{ component: !subs ? Link : null, to: path }}
          onClick={() => subs && setOpen(!open)}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: !mobile ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <Icon />
          </ListItemIcon>
          <ListItemText primary={title} sx={{ opacity: mobile ? 0 : 1 }} />
          {subs && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
      </ListItem>

      {subs ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subs.map(({ Icon, title }) => (
              <ListItemButton key={title} sx={{ pl: 5 }}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      ) : null}
    </>
  );
};

const DrawerContent: React.FC<{
  mobile: boolean;
  listOptions: ListOption[];
}> = ({ mobile, listOptions }) => {
  return (
    <Box>
      {!mobile && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            src={logo}
            sx={{ width: "100px", height: "100px", m: 3 }}
          ></Avatar>
        </Box>
      )}
      <List>
        {listOptions.map((option) => (
          <ItemList key={option.title} mobile={mobile} option={option} />
        ))}

        <ListItemButton
          sx={{
            justifyContent: "center",
            position: "fixed",
            bottom: 0,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: !mobile ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <ExitToApp />
          </ListItemIcon>
          <ListItemText
            primary={"cerrar sesion"}
            sx={{ opacity: !mobile ? 1 : 0 }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
};

export const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
  const { children, listOptions } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <MobileDrawer variant="permanent" open={false}>
          <DrawerContent mobile listOptions={listOptions} />
        </MobileDrawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <DrawerContent mobile={false} listOptions={listOptions} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
