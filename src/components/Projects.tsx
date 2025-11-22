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
    title: "Tuning",
    description: "뉴스 형식으로 매칭 결과를 전달하는 소셜 매칭 서비스",
    period: "25.04.01 (월) - 25.08.01 (수)",
    stacks: ["Next.js", "Zustand", "Tanstack Query", "Tailwind CSS", "Axios"],
    isLarge: true,
  },
  {
    title: "Qampus",
    description: "대학생 질문 답변 커뮤니티 플랫폼",
    period: "25.04.01 (월) - 25.08.01 (수)",
    stacks: ["Next.js", "Zustand"],
    backgroundImage: "/images/qampus-cover.png",
  },
  {
    title: "Eco Track",
    description: "친환경 행동 기록 기반 탄소 배출 시각화 서비스",
    period: "25.04.01 (월) - 25.08.01 (수)",
    stacks: ["Next.js", "Zustand", "Tanstack Query"],
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
      className={`relative rounded-lg p-4 sm:p-8 flex flex-col justify-between text-left overflow-hidden ${
        isLarge ? "col-span-1 sm:col-span-2" : ""
      } min-h-[300px] sm:min-h-[360px] ${
        project.backgroundImage ? "" : "bg-[var(--color-bg-card)]"
      }`}
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
      {project.backgroundImage && (
        <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
      )}
      <div className="relative z-10 flex-1 flex flex-col justify-end">
        <h3 className="text-white font-bold text-2xl sm:text-2xl mb-2 sm:mb-2">
          {project.title}
        </h3>
        <p className="text-white/80 text-sm font-semibold sm:text-base mb-2 sm:mb-3">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-white/60 text-xs font-medium sm:text-sm mb-4">
          <HiCalendar className="w-3 h-3" />
          <span>기간 | {project.period}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stacks.map((stack) => (
            <span
              key={stack}
              className="px-2 sm:px-3 py-1 font-bold rounded-lg bg-white/10 text-white text-xs sm:text-sm"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div className={`absolute z-10 ${isLarge ? "bottom-4 right-4" : "top-4 right-4"}`}>
        <HiPlus className="text-white text-xl sm:text-2xl" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 space-y-6 px-4 mb-20 mt-20 sm:px-6">
      <h2 className="font-black uppercase tracking-[0.1em] sm:tracking-[0.16em] text-white text-[clamp(1.2rem,2.2vw,1.5rem)] sm:text-[clamp(1.1rem,1.6vw,1.8rem)] whitespace-nowrap text-center">
        Projects
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5">
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
