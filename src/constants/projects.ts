import type { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    title: "튜닝",
    description: "뉴스 형식으로 매칭 결과를 전달하는 소셜 매칭 서비스",
    period: "25.04.01 (월) - 25.08.01 (수)",
    stacks: ["Next.js", "Zustand", "Tanstack Query", "Tailwind CSS", "Axios", "Jest"],
    isLarge: true,
    backgroundImage: "/images/tuning-cover.png",
  },
  {
    title: "캠퍼스",
    description: "대학생 질문 답변 커뮤니티 플랫폼",
    period: "25.04.01 (월) - 25.08.01 (수)",
    stacks: ["Next.js", "Zustand", "Tanstack Query", "Tailwind CSS", "Axios"],
  },
  {
    title: "에코트랙",
    description: "친환경 행동 기반 탄소 발자국 감소 가이드",
    period: "25.04.01 (월) - 25.08.01 (수)",
    stacks: ["React", "Zustand", "Tanstack Query", "Styled-components"],
  },
];
