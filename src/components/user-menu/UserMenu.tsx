import { Link } from "react-router-dom";
import { useContext } from "preact/hooks";

import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";

import { useState } from "preact/compat";

import type { h, VNode } from "preact";
import { UserContext, UserContextSetter } from "@context";

const UserMenu = (): VNode => {
  const user = useContext(UserContext);
  const { setUser } = useContext(UserContextSetter);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: h.JSX.TargetedEvent<HTMLInputElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return user?.authenticated ? (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="user-menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="user-menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </>
  ) : (
    <Button component={Link} to="/auth/login" color="inherit">
      LOGIN
    </Button>
  );
};

export default UserMenu;
