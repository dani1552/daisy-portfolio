export type StackItem = {
  name: string;
  logo: string;
  description: string;
};

export type TabData = {
  value: string;
  title: string;
  stacks: StackItem[];
};

export type HighlightDemoProps = {
  mode?: "children" | "parent";
  exitDelay?: number;
  hover?: boolean;
};
