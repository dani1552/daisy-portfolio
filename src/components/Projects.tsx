import { HiPlus } from "react-icons/hi";
import { HiCalendar } from "react-icons/hi";

type Project = {
  title: string;
  description: string;
  period: string;
  stacks: string[];
  isLarge?: boolean;
  backgroundImage?: string;
};

const PROJECTS: Project[] = [
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

function ProjectCard({
  project,
  isLarge = false,
}: {
  project: Project;
  isLarge?: boolean;
}) {
  return (
    <div
      className={`group relative rounded-lg p-4 sm:p-8 flex flex-col justify-between text-left overflow-hidden cursor-pointer ${
        isLarge ? "col-span-1 sm:col-span-2" : ""
      } min-h-[180px] sm:min-h-[360px] border border-white/10 ${
        project.backgroundImage ? "" : "bg-white/5"
      } backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_16px_45px_rgba(0,0,0,0.35)]`}
      style={
        project.backgroundImage
          ? {
              backgroundImage: `url(${project.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      {/* 글래스모피즘 배경 효과 */}
      <div className="pointer-events-none absolute inset-[-40%] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(255,255,255,0.08),rgba(255,255,255,0),rgba(255,255,255,0.12),rgba(255,255,255,0))] opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-90" />
      <div className="pointer-events-none absolute inset-px rounded-[0.4rem] bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex-1 flex flex-col justify-end">
        <h3 className="text-white font-bold text-base sm:text-xl mb-0.5 sm:mb-1">
          {project.title}
        </h3>
        <p className="text-white/80 text-[10px] font-semibold sm:text-sm mb-1 sm:mb-3 leading-tight">
          {project.description}
        </p>
        <div className="flex items-center gap-1.5 sm:gap-2 text-white/60 text-[10px] sm:text-xs font-medium mb-2 sm:mb-4">
          <HiCalendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          <span>{project.period}</span>
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {project.stacks.map((stack) => (
            <span
              key={stack}
              className="px-1.5 sm:px-3 py-0.5 sm:py-1 font-bold rounded-lg bg-white/10 text-white text-[10px] sm:text-xs"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`absolute z-10 ${
          isLarge
            ? "top-4 right-4 sm:bottom-4 sm:right-4"
            : "top-4 right-4 sm:top-4 sm:right-4"
        }`}
      >
        <HiPlus className="text-white text-sm sm:text-xl" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 space-y-6 px-4 py-8 sm:px-4 sm:py-8 mb-20 mt-20 overflow-x-hidden"
    >
      <div className="introduce-bg-circle introduce-bg-circle-2"></div>
      <h2 className="font-black uppercase tracking-[0.1em] sm:tracking-[0.16em] text-white text-[clamp(1.4rem,2.5vw,1.6rem)] sm:text-[clamp(1.1rem,1.6vw,1.8rem)] whitespace-nowrap text-center relative z-10">
        Projects
      </h2>
      <div className="max-w-2xl mx-auto p-5 sm:p-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              isLarge={project.isLarge || false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
