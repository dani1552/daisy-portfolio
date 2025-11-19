import Introduce from "@/components/Introduce";
import Skills from "@/components/Skills";
import Title from "@/components/Title";

export default function HomePage() {
  return (
    <main className="text-white bg-[var(--color-bg)] flex flex-col">
      <Title />
      <Introduce />
      <Skills />
    </main>
  );
}
