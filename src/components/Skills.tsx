import { Highlight } from "@/components/animate-ui/primitives/effects/highlight";
import { useState, useLayoutEffect, useRef } from "react";

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
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-center min-w-max px-2">
        <Highlight
          defaultValue={TABS[0]?.value}
          className="bg-zinc-800"
          wrapperClassName="flex border border-zinc-800 rounded-full bg-black/10 p-0.5 sm:p-1 flex-wrap sm:flex-nowrap"
          itemsClassName="px-2 sm:px-3 h-7 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm leading-none transition-transform duration-300 text-zinc-400 data-[active=true]:text-white whitespace-nowrap"
          containerClassName="flex justify-center gap-0.5 sm:gap-1 flex-wrap sm:flex-nowrap"
          mode={mode}
          exitDelay={exitDelay}
          hover={hover}
          onValueChange={onValueChange}
        >
          {TABS.map((tab) => (
            <div key={tab.value} data-value={tab.value}>
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
    <section className="text-center relative z-10 space-y-6 px-4 mb-20 mt-20 sm:px-6">
      <h2 className="font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white text-[clamp(1.25rem,3vw,2rem)] sm:text-[clamp(1.5rem,2vw,2.25rem)] whitespace-nowrap">
        Skills
      </h2>
      <div className="flex justify-center">
        <HighlightDemo onValueChange={setSelectedTab} />
      </div>
      <div
        ref={containerRef}
        className="mt-8 max-w-2xl mx-auto"
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
                    className="flex items-start gap-2 sm:gap-4 text-left border-b border-zinc-800 pb-3 sm:pb-4 last:border-b-0 last:pb-0"
                  >
                    <img
                      src={stack.logo}
                      alt={`${stack.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-0.5 sm:mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
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
