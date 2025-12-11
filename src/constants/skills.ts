import type { TabData } from "@/types/skills";

export const TABS: TabData[] = [
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
