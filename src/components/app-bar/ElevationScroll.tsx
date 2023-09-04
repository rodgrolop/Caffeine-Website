import { cloneElement } from "preact";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { ElevationScrollProps } from "./ElevationScrollProps";
import type { VNode } from "preact";
import { useContext } from "preact/hooks";
import { LayoutContext } from "@context";

const ElevationScroll = (props: ElevationScrollProps): VNode => {
  const { isDrawerOpen } = useContext(LayoutContext);
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger || isDrawerOpen ? 4 : 0,
  });
};

export default ElevationScroll;
