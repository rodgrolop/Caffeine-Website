import { Link, useLocation } from "wouter-preact";
import { useT } from "talkr";

import { default as MuiDrawer } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import { SocialGrid } from "@components";

import {
  drawerLinksGlobal,
  drawerLinksProtected,
  drawerLinksAuthentication,
  type DrawerLinksProps,
} from "./drawer-links";

import type { VNode } from "preact";
import { useContext } from "preact/hooks";
import { LayoutContext } from "@context";

const Drawer = (): VNode => {
  const { T } = useT();
  const [location] = useLocation();
  const { isDrawerOpen, toggleDrawer } = useContext(LayoutContext);

  const handleClose = (): void => toggleDrawer?.();

  return (
    <MuiDrawer open={isDrawerOpen} onClose={handleClose}>
      <Toolbar />
      <Box
        sx={{
          width: 250,
          height: "100%",
          paddingTop: 1,
        }}
        role="presentation"
        onClick={handleClose}
        onKeyDown={handleClose}
      >
        <List disablePadding>
          {drawerLinksGlobal.map(
            ({ name, path, Icon }: DrawerLinksProps): VNode => (
              <Link href={path}>
                <ListItem disablePadding key={name}>
                  <ListItemButton selected={location === path}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={T(name)} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
        </List>
        <Divider />
        <List disablePadding>
          {drawerLinksProtected.map(
            ({ name, path, Icon }: DrawerLinksProps): VNode => (
              <Link href={path}>
                <ListItem disablePadding key={name}>
                  <ListItemButton selected={location === path}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={T(name)} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
        </List>
        <Divider />
        <List disablePadding>
          {drawerLinksAuthentication.map(
            ({ name, path, Icon }: DrawerLinksProps): VNode => (
              <Link href={path}>
                <ListItem disablePadding key={name}>
                  <ListItemButton selected={location === path}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={T(name)} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
        </List>
      </Box>
      {/* <SocialGrid /> */}
    </MuiDrawer>
  );
};

export default Drawer;
