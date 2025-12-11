import ProjectCard from "@/components/Projects/ProjectCard";
import { PROJECTS } from "@/constants/projects";

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
