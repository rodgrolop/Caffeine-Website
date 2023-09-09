import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import { styles } from "./styles";
import { useState } from "preact/compat";
import { useSanitizeLanguage } from "@utils";
import { useT } from "talkr";

import type { VNode, h } from "preact";

const LanguageSwitcher = (): VNode => {
  const { language } = useSanitizeLanguage();
  const { T, setLocale } = useT();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: h.JSX.TargetedEvent<HTMLInputElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const setLang = (lng: string): void => {
    setLocale(lng);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="language switcher"
        aria-controls="language-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <TranslateIcon />
      </IconButton>
      <Menu
        id="language-appbar"
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
        <MenuItem
          onClick={(): void => setLang("en")}
          selected={language() === "en"}
          sx={styles.languageButton}
        >
          {T("english")}
        </MenuItem>
        <MenuItem
          onClick={(): void => setLang("es")}
          selected={language() === "es"}
          sx={styles.languageButton}
        >
          {T("spanish")}
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
