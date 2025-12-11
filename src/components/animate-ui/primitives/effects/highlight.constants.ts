import type { Transition } from "motion/react";
import type { HighlightStyle } from "./highlight.types";

export const DEFAULT_STYLE: HighlightStyle = {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
  opacity: 0,
};

export const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  stiffness: 350,
  damping: 35,
};
