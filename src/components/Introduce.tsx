import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import ValueCards from "./Introduce/ValueCards";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const selectLastFiveMonths = (contributions: Activity[]): Activity[] => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 5;

  return contributions.filter((day: Activity) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    if (currentMonth >= 5) {
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    }

    return (
      (date.getFullYear() === currentYear && monthOfDay <= currentMonth) ||
      (date.getFullYear() === currentYear - 1 &&
        monthOfDay > currentMonth + 11 - shownMonths)
    );
  });
};

const CONTACTS = [
  { label: "Phone", value: "010-2938-6255" },
  { label: "Email", value: "dani1552@naver.com" },
  { label: "Birth", value: "2002/10/30" },
] as const;

const SOCIALS = [
  {
    name: "GitHub",
    icon: "/icons/github-icon.png",
    href: "https://github.com/dani1552",
  },
  {
    name: "Tistory",
    icon: "/icons/tistory-icon.png",
    href: "https://dani1552.tistory.com",
  },
  {
    name: "LinkedIn",
    icon: "/icons/linkedin-icon.png",
    href: "https://www.linkedin.com/in/dani1552",
  },
] as const;

export default function Introduce() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1920,
  );
  const [isMounted] = useState(typeof window !== "undefined");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const availableWidth = windowWidth - 96;
  const blockSize = Math.max(8, Math.min(11, Math.floor(availableWidth / 110)));
  const blockMargin = Math.max(2, Math.floor(blockSize / 4));
  const fontSize = Math.max(10, Math.min(12, Math.floor(availableWidth / 130)));

  return (
    <section
      id="introduce"
      className="relative flex flex-col gap-2 px-3 sm:px-4 text-white overflow-x-hidden"
    >
      {/* <div className="introduce-bg-circle introduce-bg-circle-1"></div> */}
      <div className="introduce-bg-circle introduce-bg-circle-2"></div>

      <div className="text-center relative z-10">
        <h2 className="font-black uppercase tracking-[0.1em] sm:tracking-[0.16em] text-white text-[clamp(0.9rem,2.2vw,1.5rem)] sm:text-[clamp(1.1rem,1.6vw,1.8rem)] whitespace-nowrap">
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
            <div>
              <p className="font-bold text-[clamp(0.95rem,2.1vw,1.4rem)] sm:text-[clamp(1.1rem,1.1vw,1.5rem)]">
                김다은 (Daeun Kim)
              </p>
            </div>
            <dl className="grid grid-cols-[auto_auto] gap-x-1.5 gap-y-0.5 text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.95rem,1.05vw,1.05rem)] text-white/90 sm:grid-cols-[74px_auto]">
              {CONTACTS.map((item) => (
                <React.Fragment key={item.label}>
                  <dt className="font-bold text-white">{item.label}</dt>
                  <dd className="font-normal text-white">{item.value}</dd>
                </React.Fragment>
              ))}
            </dl>
            <div className="flex gap-1.5 sm:gap-2.5 pt-1.5 sm:pt-2.5">
              {SOCIALS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[clamp(2rem,4vw,3rem)] w-[clamp(2rem,4vw,3rem)] sm:h-[clamp(2.2rem,3vw,3rem)] sm:w-[clamp(2.2rem,3vw,3rem)] items-center justify-center rounded-xl sm:rounded-2xl bg-white/5 p-1.5 transition hover:bg-white/20"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-[clamp(0.95rem,1.8vw,2.2rem)] w-[clamp(0.95rem,1.8vw,2.2rem)] sm:h-[clamp(1.1rem,1.4vw,2.2rem)] sm:w-[clamp(1.1rem,1.4vw,2.2rem)] object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <ul className="flex w-full max-w-2xl mx-auto flex-col gap-1 sm:gap-1 font-semibold text-[clamp(0.8rem,1vw,0.8rem)] sm:text-[clamp(0.85rem,1vw,0.8rem)] text-start leading-relaxed list-disc list-inside break-keep [&>li::marker]:text-[0.5em] mt-3 sm:mt-4 md:mt-5">
          <li>
            사용자 경험을 개선하고 가치를 더하는 인터페이스를 만들며,{" "}
            <b>클린 코드 작성</b>에 열정을 쏟고 있습니다.
          </li>
          <li>
            단순한 기능 구현을 넘어 기술의 원리를 이해하고, 협업 과정에서 신뢰를 주며
            서비스 가치 향상에 기여하는 개발을 지향합니다.
          </li>
        </ul>

        {/* Value Cards */}
        <div className="w-full max-w-2xl mx-auto mt-4 sm:mt-5 relative z-10">
          <ValueCards />
        </div>

        {/* GitHub Contributions Calendar */}
        <div className="w-full max-w-3xl mx-auto mt-4 sm:mt-5 relative z-10 flex justify-center overflow-x-hidden text-[10px] sm:text-xs">
          <div className="github-calendar-wrapper w-full max-w-full overflow-hidden">
            {isMounted && (
              <GitHubCalendar
                username="dani1552"
                blockSize={blockSize}
                blockMargin={blockMargin}
                fontSize={fontSize}
                showWeekdayLabels={!isMobile}
                transformData={isMobile ? selectLastFiveMonths : undefined}
                labels={{
                  totalCount: isMobile
                    ? "{{count}} contributions in the last 5 months"
                    : "{{count}} contributions in {{year}}",
                }}
                theme={{
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                colorScheme="dark"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
