import { useState } from "react";
import { TABS } from "@/constants/skills";
import HighlightDemo from "@/components/Skills/HighlightDemo";
import SkillsTabContent from "@/components/Skills/SkillsTabContent";
import { useTabContainerHeight } from "@/hooks/useTabContainerHeight";

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState<string | null>(TABS[0]?.value);
  const { containerHeight, registerTabRef } = useTabContainerHeight();

  return (
    <section
      id="skills"
      className="text-center relative z-10 space-y-6 px-3 sm:px-4 mb-20 mt-20"
    >
      <h2 className="font-black uppercase tracking-[0.1em] sm:tracking-[0.16em] text-white text-[clamp(1.2rem,2.2vw,1.5rem)] sm:text-[clamp(1.1rem,1.6vw,1.8rem)] whitespace-nowrap">
        Skills
      </h2>
      <div className="flex justify-center max-w-3xl mx-auto">
        <HighlightDemo onValueChange={setSelectedTab} />
      </div>
      <div
        className="mt-8 max-w-2xl mx-auto p-4 sm:p-8"
        style={{
          minHeight: containerHeight ? `${containerHeight}px` : "auto",
        }}
      >
        {TABS.map((tab) => (
          <SkillsTabContent
            key={tab.value}
            tab={tab}
            isActive={tab.value === selectedTab}
            onRef={registerTabRef(tab.value)}
          />
        ))}
      </div>
    </section>
  );
}
