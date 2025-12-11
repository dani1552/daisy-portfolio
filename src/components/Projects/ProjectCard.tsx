import { HiPlus } from "react-icons/hi";
import { HiCalendar } from "react-icons/hi";
import type { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project;
  isLarge?: boolean;
}
export default function ProjectCard({ project, isLarge = false }: ProjectCardProps) {
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
