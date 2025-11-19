import { Highlight } from "@/components/animate-ui/primitives/effects/highlight";

const TABS = [
  {
    value: "tab-1",
    title: "Framework / Library",
    description: "Tab 1 description",
  },
  {
    value: "tab-2",
    title: "Language",
    description: "Tab 2 description",
  },
  {
    value: "tab-3",
    title: "State Management",
    description: "Tab 3 description",
  },
  {
    value: "tab-4",
    title: "Styling",
    description: "Tab 2 description",
  },
  {
    value: "tab-5",
    title: "Testing",
    description: "Tab 3 description",
  },
];

type HighlightDemoProps = {
  mode?: "children" | "parent";
  exitDelay?: number;
  hover?: boolean;
};

export const HighlightDemo = ({
  mode = "children",
  exitDelay = 200,
  hover = false,
}: HighlightDemoProps) => {
  return (
    <Highlight
      defaultValue={TABS[0]?.value}
      className="bg-zinc-800"
      wrapperClassName="flex border border-zinc-800 rounded-full bg-black/10 p-1"
      itemsClassName="px-3 h-8 flex items-center justify-center rounded-full text-sm leading-none transition-transform duration-300 text-zinc-400 data-[active=true]:text-white"
      {...(mode === "parent" && {
        containerClassName: "flex",
      })}
      mode={mode}
      exitDelay={exitDelay}
      hover={hover}
    >
      {TABS.map((tab) => (
        <div key={tab.value} data-value={tab.value}>
          {tab.title}
        </div>
      ))}
    </Highlight>
  );
};

export default function Skills() {
  return (
    <section className="text-center relative z-10 space-y-6">
      <h2 className="font-bold text-[clamp(1.5rem,4vw,3rem)] sm:text-[clamp(1.8rem,1.6vw,3rem)] leading-tight">
        Skills
      </h2>
      <div className="flex justify-center">
        <HighlightDemo />
      </div>
    </section>
  );
}
