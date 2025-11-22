import { HiPlus } from "react-icons/hi";

interface ValueCardProps {
  title: string;
  description: string;
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="value-card group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-2 sm:p-4 flex flex-col justify-between min-h-[85px] sm:min-h-[145px] text-left backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
      <div className="pointer-events-none absolute inset-[-40%] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(255,255,255,0.08),rgba(255,255,255,0),rgba(255,255,255,0.12),rgba(255,255,255,0))] opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-90" />
      <div className="pointer-events-none absolute inset-px rounded-[0.4rem] bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 px-2.5 py-1.5 sm:px-2 sm:py-1">
        <h3 className="text-white font-bold text-[clamp(0.95rem,1.6vw,1.1rem)]">
          {title}
        </h3>
        <p className="text-white/50 font-bold text-[clamp(0.78rem,1vw,0.8rem)] mt-0.6">
          {description}
        </p>
      </div>
      <div className="relative z-10 self-end mt-4 flex h-8 w-8 items-center justify-center bg-white/18 text-white transition-all duration-500 group-hover:bg-white/28 group-hover:scale-105 rounded-[0.125rem]">
        <HiPlus className="text-[clamp(0.9rem,1.5vw,1.3rem)] sm:text-[clamp(0.95rem,1.3vw,1.4rem)]" />
      </div>
    </div>
  );
}
