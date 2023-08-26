import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorScheme } from "@mui/material/styles";

import type { VNode } from "preact";

const ModeSwitcher = (): VNode => {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      color="inherit"
      aria-label="switch mode"
      onClick={(): void => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

export default ModeSwitcher;
