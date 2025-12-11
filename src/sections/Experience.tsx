import { EXPERIENCE_ITEMS } from "@/constants/experience";
import ArrowIcon from "@/components/Experience/ArrowIcon";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

export default function Experience() {
  const { scrollRef, isAtStart, isAtEnd, scroll } = useHorizontalScroll();
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
            onClick={() => scroll("prev")}
            className="p-1.5 sm:p-2 text-white disabled:text-white/30 transition focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent border-none"
            aria-label="Previous experiences"
            disabled={isAtStart}
          >
            <ArrowIcon direction="left" muted={isAtStart} />
          </button>
          <button
            type="button"
            onClick={() => scroll("next")}
            className="p-1.5 sm:p-2 text-white disabled:text-white/30 transition focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent border-none"
            aria-label="Next experiences"
            disabled={isAtEnd}
          >
            <ArrowIcon direction="right" muted={isAtEnd} />
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
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
