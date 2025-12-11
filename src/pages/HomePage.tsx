import Introduce from "@/sections/Introduce";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Title from "@/sections/Title";

export default function HomePage() {
  return (
    <main className="text-white bg-[var(--color-bg)] flex flex-col">
      <Title />
      <Introduce />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}
