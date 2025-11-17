import React from "react";

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
    name: "LinkedIn",
    icon: "/icons/linkedin-icon.png",
    href: "https://www.linkedin.com/in/dani1552",
  },
  {
    name: "Tistory",
    icon: "/icons/tistory-icon.png",
    href: "https://dani1552.tistory.com",
  },
] as const;

export default function Introduce() {
  return (
    <section className="flex flex-col gap-4 px-6 text-white">
      <div className="text-center">
        <h2 className="font-bold text-[clamp(1.8rem,2vw,3rem)] leading-tight">
          Introduce
        </h2>
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-20 rounded-3xl p-8 text-center backdrop-blur md:flex-row md:items-center md:justify-center md:text-left">
        <div className="flex shrink-0 justify-center md:w-[35%] md:justify-end">
          <img
            src="/images/profile.jpg"
            alt="김다은 프로필"
            className="aspect-square w-[clamp(12rem,16vw,14rem)] rounded-full object-cover shadow-lg shadow-black/40"
          />
        </div>
        <div className="flex w-full max-w-xl flex-col gap-6 text-left text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed md:w-[65%]">
          <div>
            <p className="font-bold text-[clamp(1.2rem,1.4vw,2rem)]">
              김다은 (Daeun Kim)
            </p>
          </div>
          <dl className="grid grid-cols-[auto_auto] gap-x-2 gap-y-1 text-[clamp(1.2rem,1.4vw,1.3rem)] text-white/90 sm:grid-cols-[90px_auto]">
            {CONTACTS.map((item) => (
              <React.Fragment key={item.label}>
                <dt className="font-bold text-white">{item.label}</dt>
                <dd className="font-normal text-white">{item.value}</dd>
              </React.Fragment>
            ))}
          </dl>
          <div className="flex gap-4 pt-4">
            {SOCIALS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 p-2 transition hover:bg-white/20"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-8 w-8 object-contain md:h-14 md:w-14"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
