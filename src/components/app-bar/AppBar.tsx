import { LanguageSwitcher, UserMenu, MainLogo } from "@components";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { default as MuiAppBar } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "wouter-preact";

import ElevationScroll from "./ElevationScroll";
import { appBarLinks } from "./app-bar-links";
import type { AppBarLinksProps } from "./app-bar-links";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type { VNode } from "preact";
import { useContext } from "preact/hooks";
import { LayoutContext } from "@context";
import { useT } from "talkr";

const AppBar = (): VNode => {
  const { T } = useT();
  const { toggleDrawer } = useContext(LayoutContext);

  return (
    <ElevationScroll>
      <MuiAppBar
        position="sticky"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleDrawer?.()}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" aria-label="Caffeine logo">
            <a>
              <MainLogo
                styles={{
                  width: 48,
                  height: 48,
                  marginLeft: 16,
                  marginRight: 16,
                  marginTop: 6,
                }}
              />
            </a>
          </Link>
          <div style={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            {appBarLinks.map(({ name, path }: AppBarLinksProps) => (
              <Link href={path} key={name}>
                <Button
                  sx={{
                    color: "white",
                  }}
                >
                  {T(name)}
                </Button>
              </Link>
            ))}
          </Box>
          <UserMenu />
          <LanguageSwitcher />
        </Toolbar>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
