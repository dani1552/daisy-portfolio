import { useEffect, useRef, useState } from "react";
import type { ExperienceItem } from "@/types/experience";
import { EXPERIENCE_ITEMS } from "@/constants/experience";

const ArrowIcon = ({
  direction,
  muted = false,
}: {
  direction: "left" | "right";
  muted?: boolean;
}) => (
  <span
    aria-hidden
    className={`block w-2.5 h-2.5 sm:w-3 sm:h-3 border-t-[2.5px] sm:border-t-[3px] border-r-[2.5px] sm:border-r-[3px] ${
      muted ? "border-white/30" : "border-white"
    }`}
    style={{
      transform: direction === "left" ? "rotate(-135deg)" : "rotate(45deg)",
    }}
  />
);

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
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

      {/* 글래스모피즘 배경 효과 */}
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
};

export default function Experience() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const updateEdgeState = () => {
    const node = scrollerRef.current;
    if (!node) return;
    const { scrollLeft, scrollWidth, clientWidth } = node;
    setIsAtStart(scrollLeft <= 1);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  const handleScroll = (direction: "prev" | "next") => {
    if ((direction === "prev" && isAtStart) || (direction === "next" && isAtEnd)) {
      return;
    }
    const node = scrollerRef.current;
    if (!node) return;
    const scrollAmount = node.clientWidth * 0.9;
    node.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
    requestAnimationFrame(updateEdgeState);
  };

  useEffect(() => {
    updateEdgeState();
    const node = scrollerRef.current;
    if (!node) return;
    node.addEventListener("scroll", updateEdgeState);
    window.addEventListener("resize", updateEdgeState);
    return () => {
      node.removeEventListener("scroll", updateEdgeState);
      window.removeEventListener("resize", updateEdgeState);
    };
  }, []);

  return (
    <section
      id="experience"
      className="relative z-10 space-y-6 px-3 sm:px-4 mb-20 mt-20 overflow-x-hidden"
    >
      <div className="text-center relative z-10">
        <h2 className="font-black uppercase tracking-[0.1em] sm:tracking-[0.16em] text-white text-[clamp(1.2rem,2.2vw,1.5rem)] sm:text-[clamp(1.1rem,1.6vw,1.8rem)] whitespace-nowrap">
          Experience
        </h2>
      </div>

      <div className="max-w-2xl mx-auto p-4 sm:p-8 relative z-10">
        <div className="flex justify-end gap-2 sm:gap-3 mb-3 sm:mb-4">
          <button
            type="button"
            onClick={() => handleScroll("prev")}
            className="p-1.5 sm:p-2 text-white disabled:text-white/30 transition focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent border-none"
            aria-label="Previous experiences"
            disabled={isAtStart}
          >
            <ArrowIcon direction="left" muted={isAtStart} />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("next")}
            className="p-1.5 sm:p-2 text-white disabled:text-white/30 transition focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent border-none"
            aria-label="Next experiences"
            disabled={isAtEnd}
          >
            <ArrowIcon direction="right" muted={isAtEnd} />
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            ref={scrollerRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pr-3 sm:pr-4 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {EXPERIENCE_ITEMS.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
