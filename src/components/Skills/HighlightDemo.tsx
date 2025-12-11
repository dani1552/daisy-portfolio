import { useRef, useCallback } from "react";
import { Highlight } from "@/components/animate-ui/primitives/effects/highlight";
import { TABS } from "@/constants/skills";

interface HighLightDemoProps {
  mode?: "children" | "parent";
  exitDelay?: number;
  hover?: boolean;
  onValueChange?: (value: string | null) => void;
}
export default function HighlightDemo({
  mode,
  exitDelay,
  hover,
  onValueChange,
}: HighLightDemoProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const scrollPositionRef = useRef<number>(0);

  const handleTabClick = useCallback(
    (value: string | null) => {
      if (!value) {
        onValueChange?.(value);
        return;
      }

      const container = scrollContainerRef.current;
      const clickedTab = tabsRef.current.get(value);

      if (!container || !clickedTab) {
        onValueChange?.(value);
        return;
      }

      if (window.innerWidth >= 640) {
        onValueChange?.(value);
        return;
      }

      const tabIndex = TABS.findIndex((tab) => tab.value === value);
      const containerRect = container.getBoundingClientRect();
      const tabRect = clickedTab.getBoundingClientRect();
      const currentScroll = container.scrollLeft;
      const savedScroll = scrollPositionRef.current;

      const tabRightRelative = tabRect.right - containerRect.left;
      const isNearRightEdge = tabRightRelative > containerRect.width * 0.8;

      const tabLeftRelative = tabRect.left - containerRect.left;
      const isNearLeftEdge = tabLeftRelative < containerRect.width * 0.2;

      if (tabIndex === 2 && isNearRightEdge) {
        if (Math.abs(currentScroll - savedScroll) < 10 && savedScroll > 0) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          scrollPositionRef.current = 0;
        } else {
          scrollPositionRef.current = currentScroll;

          const stylingTab = tabsRef.current.get(TABS[3]?.value);
          if (stylingTab) {
            const stylingRect = stylingTab.getBoundingClientRect();
            const scrollOffset = stylingRect.left - containerRect.left - 20;

            container.scrollTo({
              left: currentScroll + scrollOffset,
              behavior: "smooth",
            });
          }
        }
      } else if (tabIndex === 3 && isNearRightEdge) {
        if (Math.abs(currentScroll - savedScroll) < 10 && savedScroll > 0) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          scrollPositionRef.current = 0;
        } else {
          scrollPositionRef.current = currentScroll;

          const testingTab = tabsRef.current.get(TABS[4]?.value);
          if (testingTab) {
            const testingRect = testingTab.getBoundingClientRect();
            const scrollOffset = testingRect.left - containerRect.left - 20;

            container.scrollTo({
              left: currentScroll + scrollOffset,
              behavior: "smooth",
            });
          }
        }
      } else if (
        (tabIndex === 0 || tabIndex === 1) &&
        isNearLeftEdge &&
        currentScroll > 50
      ) {
        if (Math.abs(currentScroll - savedScroll) < 10 && savedScroll > 0) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          scrollPositionRef.current = 0;
        } else {
          scrollPositionRef.current = currentScroll;

          const firstTab = tabsRef.current.get(TABS[0]?.value);
          if (firstTab) {
            const firstTabRect = firstTab.getBoundingClientRect();
            const scrollOffset = firstTabRect.left - containerRect.left - 20;

            container.scrollTo({
              left: currentScroll + scrollOffset,
              behavior: "smooth",
            });
          }
        }
      }

      onValueChange?.(value);
    },
    [onValueChange],
  );

  return (
    <div
      ref={scrollContainerRef}
      className="w-full overflow-x-auto scrollbar-hide mx-4 px-4 sm:mx-0 sm:px-0"
    >
      <div className="flex justify-center min-w-max px-2 sm:px-0">
        <Highlight
          defaultValue={TABS[0]?.value}
          className="bg-zinc-800"
          wrapperClassName="flex border border-zinc-800 rounded-full bg-black/10 p-0.5 sm:p-1 flex-nowrap"
          itemsClassName="px-2 sm:px-3 h-7 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm leading-none transition-transform duration-300 text-zinc-400 data-[active=true]:text-white whitespace-nowrap flex-shrink-0 font-semibold cursor-pointer"
          containerClassName="flex justify-center gap-0.5 sm:gap-1 flex-nowrap"
          mode={mode}
          exitDelay={exitDelay}
          hover={hover}
          onValueChange={handleTabClick}
        >
          {TABS.map((tab) => (
            <div
              key={tab.value}
              data-value={tab.value}
              ref={(el) => {
                if (el) {
                  tabsRef.current.set(tab.value, el);
                } else {
                  tabsRef.current.delete(tab.value);
                }
              }}
            >
              {tab.title}
            </div>
          ))}
        </Highlight>
      </div>
    </div>
  );
}
