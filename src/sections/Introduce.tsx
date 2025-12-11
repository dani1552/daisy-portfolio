import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import ValueCards from "../components/Introduce/ValueCards";
import ProfileCard from "@/components/Introduce/ProfileCard";
import { INTRODUCE_TEXT } from "@/constants/introduce";
import useHideLessMoreText from "@/hooks/useHideLessMoreText";

export default function Introduce() {
  const [isMounted] = useState(typeof window !== "undefined");

  useHideLessMoreText(isMounted);

  return (
    <section
      id="introduce"
      className="relative flex flex-col gap-2 px-3 sm:px-4 text-white overflow-x-hidden"
    >
      <div className="introduce-bg-circle introduce-bg-circle-2"></div>

      <div className="text-center relative z-10">
        <h2 className="font-black uppercase tracking-[0.1em] sm:tracking-[0.16em] text-white text-[clamp(1.2rem,2.2vw,1.5rem)] sm:text-[clamp(1.1rem,1.6vw,1.8rem)] whitespace-nowrap">
          Introduce
        </h2>
      </div>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-2.5 sm:gap-5 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 text-center relative z-10">
        <div className="flex w-full flex-col items-center gap-6 sm:gap-12 md:gap-16 md:flex-row md:items-center md:justify-center md:text-left md:w-fit md:mx-auto">
          <div className="flex shrink-0 justify-center">
            <img
              src="/images/profile.jpg"
              alt="김다은 프로필"
              className="aspect-square w-[clamp(8rem,16vw,10.5rem)] sm:w-[clamp(9rem,12vw,11rem)] rounded-full object-cover"
            />
          </div>
          <div className="flex w-full max-w-xl flex-col gap-2.5 sm:gap-4 text-left text-[clamp(0.8rem,1.6vw,1rem)] sm:text-[clamp(0.9rem,1vw,1.05rem)] leading-relaxed">
            <ProfileCard />
          </div>
        </div>
        <ul className="flex w-full max-w-2xl mx-auto flex-col gap-1 sm:gap-1 font-medium text-[clamp(0.8rem,0.95vw,1rem)] sm:text-[clamp(0.85rem,0.95vw,1rem)] text-start leading-relaxed list-disc list-inside break-keep [&>li::marker]:text-[0.5em] mt-3 sm:mt-4 md:mt-5">
          {INTRODUCE_TEXT.map((item) => (
            <li key={item.text} dangerouslySetInnerHTML={{ __html: item.text }} />
          ))}
        </ul>

        <div className="w-full max-w-2xl mx-auto mt-4 sm:mt-5 relative z-10">
          <ValueCards />
        </div>

        <div className="w-full max-w-2xl mx-auto relative z-10 flex justify-center overflow-x-clip text-[10px] sm:text-xs px-2">
          <div
            className="github-calendar-wrapper w-full"
            style={{ maxWidth: "100%", width: "100%" }}
          >
            {isMounted && <GitHubCalendar username="dani1552" />}
          </div>
        </div>
      </div>
    </section>
  );
}
