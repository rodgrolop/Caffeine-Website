import { cloneElement } from "preact";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { ElevationScrollProps } from "./ElevationScrollProps";
import { useRecoilValue } from "recoil";
import { layoutAtom } from "@atoms";
import type { VNode } from "preact";

const ElevationScroll = (props: ElevationScrollProps): VNode => {
  const { isDrawerOpen } = useRecoilValue(layoutAtom);
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
