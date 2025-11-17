import Introduce from "@/components/Introduce";
import Title from "@/components/Title";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 bg-[var(--color-bg)] text-white">
      <Title />
      <Introduce />
    </main>
  );
}
