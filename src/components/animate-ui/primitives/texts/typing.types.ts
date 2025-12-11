import type { UseIsInViewOptions } from "@/hooks/use-is-in-view";

export type TypingTextProps = React.ComponentProps<"span"> & {
  duration?: number;
  eraseDuration?: number;
  delay?: number;
  loop?: boolean;
  holdDelay?: number;
  text: string | string[];
} & UseIsInViewOptions;

export type TypingTextContextType = {
  isTyping: boolean;
  setIsTyping: (isTyping: boolean) => void;
};
