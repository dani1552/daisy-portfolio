import type { Transition } from "motion/react";

export type HighlightMode = "children" | "parent";

export type HighlightProps = Omit<
  React.ComponentProps<"div">,
  "className" | "onChange"
> & {
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
  hover?: boolean;
  click?: boolean;
  disabled?: boolean;
  mode?: HighlightMode;
  exitDelay?: number;
  containerClassName?: string;
  transition?: Transition;
  className?: string;
  wrapperClassName?: string;
  itemsClassName?: string;
};

export type HighlightStyle = {
  width: number;
  height: number;
  x: number;
  y: number;
  opacity: number;
};
