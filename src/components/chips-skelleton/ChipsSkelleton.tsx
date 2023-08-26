import Skeleton from "@mui/material/Skeleton";

import type { VNode } from "preact";
import { styles } from "./styles";

const ChipsSkelleton = (): VNode => (
  <>
    {Array.from(new Array(3)).map(
      (_item, index): VNode => (
        <Skeleton sx={styles.categoryChip} variant="rectangular" key={index} />
      )
    )}
  </>
);

export default ChipsSkelleton;
