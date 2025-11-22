import { Highlight } from "@/components/animate-ui/primitives/effects/highlight";
import { useState, useLayoutEffect, useRef, useCallback } from "react";

type StackItem = {
  name: string;
  logo: string;
  description: string;
};

type TabData = {
  value: string;
  title: string;
  stacks: StackItem[];
};

const TABS: TabData[] = [
  {
    value: "tab-1",
    title: "Framework / Library",
    stacks: [
      {
        name: "Next.js",
        logo: "/icons/nextjs-icon.png",
        description:
          "서버 사이드 렌더링(SSR)을 활용해 초기 로딩 속도와 SEO를 최적화하며, 파일 기반 라우팅 구조를 체계적으로 관리할 수 있습니다.",
      },
      {
        name: "React",
        logo: "/icons/react-icon.png",
        description:
          "컴포넌트 기반 UI를 재사용 가능하게 설계하고, 동적인 요구사항에도 유연하게 대응해 사용자 경험을 개선할 수 있습니다.",
      },
      {
        name: "React Hook Form",
        logo: "/icons/rhf-icon.png",
        description:
          "복잡한 폼의 상태 관리 및 유효성 검사를 최소한의 리렌더링으로 처리할 수 있습니다.",
      },
    ],
  },
  {
    value: "tab-2",
    title: "Language",
    stacks: [
      {
        name: "TypeScript",
        logo: "/icons/ts-icon.png",
        description:
          "정적 타입을 사용하여 개발 단계에서 오류를 사전에 방지하고, 컴포넌트 props, API 응답, 상태 관리의 타입 안정성을 유지할 수 있습니다.",
      },
      {
        name: "JavaScript",
        logo: "/icons/js-icon.png",
        description:
          "웹 애플리케이션에서 복잡한 상태와 이벤트를 관리하고, 비동기 로직(Promise, async/await)으로 사용자 인터랙션을 매끄럽게 구현할 수 있습니다.",
      },
    ],
  },
  {
    value: "tab-3",
    title: "State Management",
    stacks: [
      {
        name: "Zustand",
        logo: "/icons/zustand-icon.svg",
        description:
          "경전역 상태를 간결하게 관리하고, React 컴포넌트 간 데이터 동기화를 효율적으로 처리할 수 있습니다.",
      },
      {
        name: "Tanstack Query",
        logo: "/icons/tanstack-icon.png",
        description:
          "서버 데이터를 캐싱·동기화하며, API 호출과 상태 업데이트를 자동화할 수 있습니다.",
      },
    ],
  },
  {
    value: "tab-4",
    title: "Styling",
    stacks: [
      {
        name: "Tailwind CSS",
        logo: "/icons/tailwind-icon.svg",
        description:
          "유틸리티 기반 CSS 프레임워크로 빠른 스타일링과 반응형 디자인을 효율적으로 구현할 수 있습니다.",
      },
      {
        name: "styled-components",
        logo: "/icons/styledcomponents-icon.png",
        description:
          "컴포넌트 단위로 스타일을 적용하여 스타일 충돌을 방지하고, 디자인 시스템을 빠르게 구축하며 반응형 UI를 구현할 수 있습니다.",
      },
      {
        name: "shadcn/ui",
        logo: "/icons/shadcn-icon.png",
        description:
          "컴포넌트 단위의 스타일 격리를 통해 스타일 충돌 없이 모듈화된 스타일링을 적용할 수 있습니다.",
      },
    ],
  },
  {
    value: "tab-5",
    title: "Testing",
    stacks: [
      {
        name: "Jest",
        logo: "/icons/jest-icon.png",
        description:
          "단위 및 통합 테스트를 자동화하여 버그를 효과적으로 방지하는 신뢰성 있는 코드를 작성할 수 있습니다.",
      },
      {
        name: "React Testing Library",
        logo: "/icons/testing-icon.png",
        description:
          "사용자 행동을 기반으로 React 컴포넌트를 테스트하여, 렌더링 결과와 DOM 변화를 기반으로 UI 로직을 검증할 수 있습니다.",
      },
    ],
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
  onValueChange,
}: HighlightDemoProps & { onValueChange?: (value: string | null) => void }) => {
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

      // 데스크톱에서는 자동 스크롤 비활성화
      if (window.innerWidth >= 640) {
        onValueChange?.(value);
        return;
      }

      const tabIndex = TABS.findIndex((tab) => tab.value === value);
      const containerRect = container.getBoundingClientRect();
      const tabRect = clickedTab.getBoundingClientRect();
      const currentScroll = container.scrollLeft;
      const savedScroll = scrollPositionRef.current;

      // 탭이 화면 오른쪽 끝에 가까운지 확인
      const tabRightRelative = tabRect.right - containerRect.left;
      const isNearRightEdge = tabRightRelative > containerRect.width * 0.8;

      // 탭이 화면 왼쪽 끝에 가까운지 확인 (20% 이하)
      const tabLeftRelative = tabRect.left - containerRect.left;
      const isNearLeftEdge = tabLeftRelative < containerRect.width * 0.2;

      // 3번째 탭(State Management)이고 오른쪽 끝에 가까운 경우 - 뒤로 이동
      if (tabIndex === 2 && isNearRightEdge) {
        // 이전에 스크롤했던 위치와 비슷하면 원래 위치로 복귀
        if (Math.abs(currentScroll - savedScroll) < 10 && savedScroll > 0) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          scrollPositionRef.current = 0;
        } else {
          // 다음 탭들을 보여주기 위해 스크롤
          scrollPositionRef.current = currentScroll;

          // Styling 탭 찾기
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
      }
      // 4번째 탭(Styling)이고 오른쪽 끝에 가까운 경우
      else if (tabIndex === 3 && isNearRightEdge) {
        // 이전에 스크롤했던 위치와 비슷하면 원래 위치로 복귀
        if (Math.abs(currentScroll - savedScroll) < 10 && savedScroll > 0) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          scrollPositionRef.current = 0;
        } else {
          // Testing 탭을 보여주기 위해 스크롤
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
};

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState<string | null>(TABS[0]?.value);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const allTabsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useLayoutEffect(() => {
    const measureHeights = () => {
      if (allTabsRef.current.size === 0) return;

      let maxHeight = 0;
      allTabsRef.current.forEach((element) => {
        if (element) {
          const height = element.scrollHeight;
          if (height > maxHeight) {
            maxHeight = height;
          }
        }
      });

      if (maxHeight > 0) {
        setContainerHeight(maxHeight);
      }
    };

    // requestAnimationFrame을 사용하여 다음 프레임에서 측정
    requestAnimationFrame(() => {
      requestAnimationFrame(measureHeights);
    });
  }, []);

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
        ref={containerRef}
        className="mt-8 max-w-2xl mx-auto p-4 sm:p-8"
        style={{
          minHeight: containerHeight ? `${containerHeight}px` : "auto",
        }}
      >
        {TABS.map((tab) => {
          const isActive = tab.value === selectedTab;
          return (
            <div
              key={tab.value}
              ref={(el) => {
                if (el) {
                  allTabsRef.current.set(tab.value, el);
                } else {
                  allTabsRef.current.delete(tab.value);
                }
              }}
              className={isActive ? "block" : "hidden"}
            >
              <div className="space-y-3 sm:space-y-4">
                {tab.stacks.map((stack) => (
                  <div
                    key={stack.name}
                    className="flex items-start gap-3 sm:gap-4 text-left border-b border-zinc-800 pb-3 sm:pb-4 last:border-b-0 last:pb-0"
                  >
                    <img
                      src={stack.logo}
                      alt={`${stack.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-0.5 sm:mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">
                        {stack.name}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {stack.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
