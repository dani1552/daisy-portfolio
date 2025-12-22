import type { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    slug: "tuning",
    title: "튜닝",
    description: "뉴스 형식으로 매칭 결과를 전달하는 소셜 매칭 서비스",
    period: "25.04.01 (월) - 25.08.01 (수)",
    stacks: ["Next.js", "Zustand", "Tanstack Query", "Tailwind CSS", "Axios", "Jest"],
    isLarge: true,
    backgroundImage: "/images/tuning-cover.png",
    teamMembers: "Frontend 1명, Backend 2명, Cloud 2명, AI 2명",
    contribution: {
      percentage: "100%",
      tags: [
        "# UI/UX 디자인 및 반응형 웹 구현",
        "# 상태 관리 및 API 통신 구조 설계, 전반적인 FE 개발 주도",
      ],
    },
    introduction:
      "기획부터 디자인, 서비스 런칭까지 7인 팀의 팀장을 맡아 전 과정을 주도하며 4개월간 실사용자 150명과 소통한 프로젝트입니다. 단순히 ‘잘 돌아가는 서비스’를 넘어, ‘더 나은 사용자 경험’을 만드는 데 집중하며  문제 해결력, 의사소통, 프로젝트 관리 역량을 키웠습니다.",
    video: "/videos/tuning-video.mp4",
    images: [],
  },
  {
    slug: "campus",
    title: "캠퍼스",
    description: "대학생 질문 답변 커뮤니티 플랫폼",
    period: "25.04.01 (월) - 25.08.01 (수)",
    stacks: ["Next.js", "Zustand", "Tanstack Query", "Tailwind CSS", "Axios"],
  },
  {
    slug: "ecotrack",
    title: "에코트랙",
    description: "친환경 행동 기반 탄소 발자국 감소 가이드",
    period: "25.04.01 (월) - 25.08.01 (수)",
    stacks: ["React", "Zustand", "Tanstack Query", "Styled-components"],
  },
];
