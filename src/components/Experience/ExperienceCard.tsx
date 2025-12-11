import type { ExperienceItem } from "@/types/experience";

interface ExperienceCardProps {
  item: ExperienceItem;
}

export default function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <div
      className={`group relative min-w-[160px] sm:min-w-[190px] min-h-[200px] sm:min-h-[260px] rounded-[12px] sm:rounded-[12px] p-3 sm:p-5 flex flex-col justify-between snap-start border border-white/10 ${
        item.backgroundImage ? "" : "bg-white/5"
      } backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_16px_45px_rgba(0,0,0,0.35)] overflow-hidden cursor-pointer`}
      style={
        item.backgroundImage
          ? {
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-black/50 rounded-[12px] sm:rounded-[12px] z-0"></div>

      <div className="pointer-events-none absolute inset-[-40%] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(255,255,255,0.08),rgba(255,255,255,0),rgba(255,255,255,0.12),rgba(255,255,255,0))] opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-90 z-[1]" />
      <div className="pointer-events-none absolute bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-80 transition-opacity duration-500 group-hover:opacity-100 z-[1]" />

      <div className="relative z-10 space-y-2 sm:space-y-3">
        <span className="inline-flex items-center justify-center px-2 sm:px-3 h-6 sm:h-7 rounded-full border border-white/20 bg-white/5 text-white text-[0.65rem] sm:text-xs font-semibold  tracking-[0.08em] whitespace-nowrap">
          {item.track}
        </span>
        <h3 className="text-white font-black text-sm sm:text-lg leading-snug whitespace-pre-line">
          {item.title}
        </h3>
      </div>
    </div>
  );
}
