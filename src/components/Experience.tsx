import { useEffect, useRef, useState } from "react";

type Speaker = {
  name: string;
  initials: string;
  color: string;
};

type ExperienceItem = {
  id: string;
  track: string;
  title: string;
  speakers: Speaker[];
};

const ArrowIcon = ({
  direction,
  muted = false,
}: {
  direction: "left" | "right";
  muted?: boolean;
}) => (
  <span
    aria-hidden
    className={`block w-3 h-3 border-t-[3px] border-r-[3px] ${
      muted ? "border-white/30" : "border-white"
    }`}
    style={{
      transform: direction === "left" ? "rotate(-135deg)" : "rotate(45deg)",
    }}
  />
);

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "exp-1",
    track: "bootcamp",
    title: "카카오 테크 부트캠프",
    speakers: [
      { name: "김다은", initials: "SY", color: "#FBBF24" },
      { name: "김다은", initials: "SM", color: "#F472B6" },
    ],
  },
  {
    id: "exp-2",
    track: "club",
    title: "IT 동아리 활동: 구름톤 유니브 / 스위프",
    speakers: [{ name: "김다은", initials: "HY", color: "#60A5FA" }],
  },
  {
    id: "exp-3",
    track: "lab",
    title: "의공학 연구실: 학부연구생으로 13개월",
    speakers: [{ name: "김다은", initials: "CE", color: "#34D399" }],
  },
  {
    id: "exp-4",
    track: "hackerthon",
    title: "네 번의 해커톤으로 다진 구현 능력",
    speakers: [{ name: "김다은", initials: "AY", color: "#A78BFA" }],
  },
];

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <div className="min-w-[200px] sm:min-w-[210px] min-h-[260px] sm:min-h-[300px] bg-[var(--color-bg-card)] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between snap-start">
      <div className="space-y-3">
        <span className="inline-flex items-center justify-center px-3 h-7 rounded-full border border-white/20 bg-white/5 text-white text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.12em] whitespace-nowrap">
          {item.track}
        </span>
        <h3 className="text-white font-black text-base sm:text-lg leading-snug whitespace-pre-line">
          {item.title}
        </h3>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <div className="flex -space-x-3">
          {item.speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="w-12 h-12 rounded-full border-2 border-[var(--color-bg-card)] flex items-center justify-center text-black font-black text-sm"
              style={{ backgroundColor: speaker.color }}
              aria-label={speaker.name}
            >
              {speaker.initials}
            </div>
          ))}
        </div>
        <p className="text-white font-semibold text-sm">
          {item.speakers.map((speaker) => speaker.name).join(" · ")}
        </p>
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
    <section id="experience" className="relative z-10 space-y-6 px-4 mb-20 mt-20 sm:px-6">
      <div className="text-center">
        <h2 className="font-black uppercase tracking-[0.1em] sm:tracking-[0.16em] text-white text-[clamp(1.2rem,2.2vw,1.5rem)] sm:text-[clamp(1.1rem,1.6vw,1.8rem)] whitespace-nowrap">
          Experience
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="flex justify-end gap-3 mb-4">
          <button
            type="button"
            onClick={() => handleScroll("prev")}
            className="p-2 text-white disabled:text-white/30 transition focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0"
            aria-label="Previous experiences"
            disabled={isAtStart}
          >
            <ArrowIcon direction="left" muted={isAtStart} />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("next")}
            className="p-2 text-white disabled:text-white/30 transition focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0"
            aria-label="Next experiences"
            disabled={isAtEnd}
          >
            <ArrowIcon direction="right" muted={isAtEnd} />
          </button>
        </div>

        <div className="overflow-hidden rounded-[30px]">
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pr-4 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
