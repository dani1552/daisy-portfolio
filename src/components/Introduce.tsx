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
      className="relative flex flex-col gap-4 px-4 sm:px-6 text-white overflow-x-hidden"
    >
      {/* <div className="introduce-bg-circle introduce-bg-circle-1"></div> */}
      <div className="introduce-bg-circle introduce-bg-circle-2"></div>

      <div className="text-center relative z-10">
        <h2 className="font-bold text-[clamp(1.5rem,4vw,3rem)] sm:text-[clamp(1.8rem,1.6vw,3rem)] leading-tight">
          Introduce
        </h2>
      </div>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 sm:gap-8 rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 text-center relative z-10">
        <div className="flex w-full flex-col items-center gap-8 sm:gap-16 md:gap-24 md:flex-row md:items-center md:justify-center md:text-left">
          <div className="flex shrink-0 justify-center">
            <img
              src="/images/profile.jpg"
              alt="김다은 프로필"
              className="aspect-square w-[clamp(10rem,20vw,14rem)] sm:w-[clamp(12rem,16vw,14rem)] rounded-full object-cover"
            />
          </div>
          <div className="flex w-full max-w-xl flex-col gap-4 sm:gap-6 text-left text-[clamp(0.9rem,2vw,1.125rem)] sm:text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed">
            <div>
              <p className="font-bold text-[clamp(1.2rem,3vw,1.8rem)] sm:text-[clamp(1.4rem,1.4vw,1.8rem)]">
                김다은 (Daeun Kim)
              </p>
            </div>
            <dl className="grid grid-cols-[auto_auto] gap-x-2 gap-y-1 text-[clamp(1rem,2.5vw,1.2rem)] sm:text-[clamp(1.2rem,1.3vw,1.2rem)] text-white/90 sm:grid-cols-[90px_auto]">
              {CONTACTS.map((item) => (
                <React.Fragment key={item.label}>
                  <dt className="font-bold text-white">{item.label}</dt>
                  <dd className="font-normal text-white">{item.value}</dd>
                </React.Fragment>
              ))}
            </dl>
            <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
              {SOCIALS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[clamp(2.5rem,5vw,4rem)] w-[clamp(2.5rem,5vw,4rem)] sm:h-[clamp(3rem,4vw,4rem)] sm:w-[clamp(3rem,4vw,4rem)] items-center justify-center rounded-xl sm:rounded-2xl bg-white/5 p-2 transition hover:bg-white/20"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-[clamp(1.25rem,2.5vw,3rem)] w-[clamp(1.25rem,2.5vw,3rem)] sm:h-[clamp(1.5rem,2vw,3rem)] sm:w-[clamp(1.5rem,1.6vw,3rem)] object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <ul className="flex w-full flex-col gap-2 sm:gap-3 text-bold text-[clamp(0.95rem,2.5vw,1.15rem)] sm:text-[clamp(1.1rem,1.3vw,1.15rem)] text-start leading-relaxed list-disc list-inside break-keep [&>li::marker]:text-[0.6em]">
          <li>
            사용자 경험을 개선하고 가치를 더하는 인터페이스를 만들기 위해 노력하며, 클린
            코드 작성에 열정을 쏟고 있습니다.
          </li>
          <li>
            단순한 기능 구현을 넘어 기술의 원리를 이해하고, 협업과 소통에서 신뢰를 주며
            서비스 가치 향상에 기여하는 개발을 지향합니다.
          </li>
        </ul>

        {/* Value Cards */}
        <div className="w-full mt-6 sm:mt-8 relative z-10">
          <ValueCards />
        </div>

        {/* GitHub Contributions Calendar */}
        <div className="w-full mt-6 sm:mt-8 relative z-10 flex justify-center overflow-x-hidden">
          <div className="github-calendar-wrapper w-full max-w-full">
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
