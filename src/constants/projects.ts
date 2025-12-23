import type { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    slug: "tuning",
    title: "튜닝",
    description: "뉴스 형식으로 매칭 결과를 전달하는 소셜 매칭 서비스",
    period: "25.04.01 (월) - 25.08.01 (수)",
    stacks: [
      "Next.js",
      "Typescript",
      "Zustand",
      "Tanstack Query",
      "Tailwind CSS",
      "Axios",
      "Jest",
    ],
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
    githubUrl: "https://github.com/100-hours-a-week/2-hertz-fe",
    youtubeUrl: "https://youtu.be/2-HDCyNjNL8",
  },
  {
    slug: "qampus",
    title: "캠퍼스",
    description: "대학생 질문 답변 커뮤니티 플랫폼",
    period: "25.01 - 25.03",
    stacks: [
      "Next.js",
      "Typescript",
      "Zustand",
      "Tanstack Query",
      "Tailwind CSS",
      "Axios",
    ],
    backgroundColor: "#3F4B5C",
    teamMembers: "Frontend 2명, Backend 3명, PM 1명, Design 1명",
    contribution: {
      percentage: "65%",
      tags: ["# 주요 도메인 퍼블리싱 및 API 연결", "# 상태 관리 및 FE 개발 주도"],
    },
    introduction:
      "IT 동아리에서 10주간 진행한 프로젝트로, 아이디어 기획부터 핵심 기능 구현까지 능동적으로 참여했습니다. 끊임없는 피드백과 시행착오 속에서 문제 해결력과 소통 역량, 협업 환경을 이끄는 조율 능력을 키웠으며, 이러한 과정이 동료들에게 신뢰로 이어져 동료 평가에서 우수 팀원으로 선정되는 성과를 얻었습니다.",
    video: "/videos/qampus-video.mp4",
    images: [],
    githubUrl: "https://github.com/Team-Qampus/Qampus_FE",
    youtubeUrl: "https://youtu.be/jz4ZaBgwP48",
  },
  {
    slug: "ecotrack",
    title: "에코트랙",
    description: "친환경 행동 기반 탄소 발자국 감소 가이드",
    period: "25.04.01 (월) - 25.08.01 (수)",
    stacks: ["React", "Zustand", "Tanstack Query", "Styled-components"],
    backgroundColor: "#3F5C46",
    teamMembers: "1인 개발 (기획, 디자인, 개발, 유지보수)",
    contribution: {
      percentage: "100%",
      tags: [
        "# 기획, 디자인, 개발 및 유지보수",
        "# SW 융합대학 학술제, MMSD 경진대회 - 학과 대표 출품작",
      ],
    },
    introduction:
      "기획부터 개발, 배포까지 1인 개발으로 완성한 서비스입니다. 실제 사용자의 피드백을 받아 기능을 개선하고 UI를 다듬으며 단순 구현을 넘어 사용자 경험 중심의 개발을 실현했습니다. 노력을 인정받아 SW융합대학 학술제 및 MMSD 경진대회 학과 대표 출품작으로 선정되었습니다.",
    video: "/videos/ecotrack-video.mp4",
    images: [],
    githubUrl: "https://github.com/dani1552/eco-track",
    youtubeUrl: "https://youtu.be/2-HDCyNjNL8",
  },
];
